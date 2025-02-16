import { NextFunction, Request, Response } from "express";
import { ErrorCodes, HttpException } from "./exceptions/root";
import { InternalException } from "./exceptions/internalException";
import { ZodError } from "zod";
import { UnprecessableEntity } from "./exceptions/validation";

export const errorHandler = (
  method: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: any) {
      let exception: HttpException;

      // ✅ Handle Zod Validation Errors
      if (error instanceof ZodError) {
        exception = new UnprecessableEntity(
          error.errors,
          ErrorCodes.UNPROSSABLE_ENTITY,
          "Validation failed"
        );
      } else if (error instanceof HttpException) {
        exception = error;
      } else {
        exception = new InternalException(
          "Something went wrong",
          error,
          ErrorCodes.INTERNAL_EXEPTION
        );
      }

      next(exception); // ✅ No need to return
    }
  };
};
