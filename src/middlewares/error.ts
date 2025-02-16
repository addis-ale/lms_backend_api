import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/rootException";

export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(error.statusCode).json({
    message: error.message,
    error: error.error,
    errorCode: error.errorCode,
  });
};
