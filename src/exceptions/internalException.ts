import { ErrorCode, HttpException } from "./rootException";

export class InternalException extends HttpException {
  constructor(message: string, error: any, errorCode: number) {
    super(message, 500, error, errorCode);
  }
}
