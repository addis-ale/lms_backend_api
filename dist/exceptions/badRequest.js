"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
const rootException_1 = require("./rootException");
class BadRequest extends rootException_1.HttpException {
    constructor(message, errorcode) {
        super(message, 400, null, errorcode);
    }
}
exports.BadRequest = BadRequest;
