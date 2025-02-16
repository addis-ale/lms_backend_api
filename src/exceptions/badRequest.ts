import { HttpException } from "./root";

export class BadRequest extends HttpException {
  constructor(message: string, errorcode: number) {
    super(message, errorcode, 400, null);
  }
}
