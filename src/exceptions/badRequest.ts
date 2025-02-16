import { HttpException } from "./rootException";

export class BadRequest extends HttpException {
  constructor(message: string, errorcode: number) {
    super(message, 400, null, errorcode);
  }
}
