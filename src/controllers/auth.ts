import { NextFunction, Request, Response } from "express";
import { hashSync, compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { signUpSchema } from "../model/user";
import { prismaClient } from "..";
import { BadRequest } from "../exceptions/badRequest";
import { ErrorCodes } from "../exceptions/root";
import { NotFoundException } from "../exceptions/notFound";
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
  res.status(200).json(user);
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  let user = await prismaClient.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    return next(
      new NotFoundException("User not found", ErrorCodes.USER_NOT_FOUND)
    );
  }
  if (!compareSync(password, user.password)) {
    return next(
      new BadRequest("Invalid Authentication", ErrorCodes.INCORRECT_PASSWORD)
    );
  }
  if (!process.env.JWT_SECRET) {
    return next(new Error("JWT_SECRET is not defined"));
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.status(200).json({ user, token });
};
export const me = async (req: Request, res: Response) => {
  res.json(req.user);
};
