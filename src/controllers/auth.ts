import { NextFunction, Request, Response } from "express";
import { hashSync, compareSync } from "bcrypt";
import { signUpSchema } from "../model/user";
import { prismaClient } from "..";
import { BadRequest } from "../exceptions/badRequest";
import { ErrorCodes } from "../exceptions/root";
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  signUpSchema.parse(req.body);
  const { name, email, password } = req.body;
  let user = await prismaClient.user.findFirst({
    where: {
      email,
    },
  });
  if (user) {
    return next(
      new BadRequest("User Already Existed", ErrorCodes.USER_ALREADY_EXISTS)
    );
  }
  user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  });
  res.send(200).json(user);
};
