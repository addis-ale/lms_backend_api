export class HttpException extends Error {
  message: string;
  error: any;
  errorCode: any;
  statusCode: number;
  constructor(
    message: string,
    statusCode: number,
    error: any,
    errorCode: ErrorCode
  ) {
    super(message);
    this.message = message;
    this.error = error;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}
export enum ErrorCode {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INCORRECT_PASSWORD = 1003,
  UNPROCESSABLE_ENTITY = 2001,
  INTERNAL_EXCEPTION = 3001,
  UNAUTHORIZED = 4001,
}
