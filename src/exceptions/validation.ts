import { HttpException } from "./root";

export class UnprecessableEntity extends HttpException {
  constructor(error: any, errorCode: number, message: string) {
    super(message, errorCode, 402, error);
  }
}
