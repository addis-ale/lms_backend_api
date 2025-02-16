"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
const root_1 = require("./root");
class BadRequest extends root_1.HttpException {
    constructor(message, errorcode) {
        super(message, errorcode, 400, null);
    }
}
exports.BadRequest = BadRequest;
