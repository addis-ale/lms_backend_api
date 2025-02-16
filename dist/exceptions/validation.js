"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprecessableEntity = void 0;
const root_1 = require("./root");
class UnprecessableEntity extends root_1.HttpException {
    constructor(error, errorCode, message) {
        super(message, errorCode, 402, error);
    }
}
exports.UnprecessableEntity = UnprecessableEntity;
