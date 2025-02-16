"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalException = void 0;
const rootException_1 = require("./rootException");
class InternalException extends rootException_1.HttpException {
    constructor(message, error, errorCode) {
        super(message, 500, error, errorCode);
    }
}
exports.InternalException = InternalException;
