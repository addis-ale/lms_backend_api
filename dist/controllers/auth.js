"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const bcrypt_1 = require("bcrypt");
const user_1 = require("../model/user");
const __1 = require("..");
const badRequest_1 = require("../exceptions/badRequest");
const root_1 = require("../exceptions/root");
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.signUpSchema.parse(req.body);
    const { name, email, password } = req.body;
    let user = yield __1.prismaClient.user.findFirst({
        where: {
            email,
        },
    });
    if (user) {
        return next(new badRequest_1.BadRequest("User Already Existed", root_1.ErrorCodes.USER_ALREADY_EXISTS));
    }
    user = yield __1.prismaClient.user.create({
        data: {
            name,
            email,
            password: (0, bcrypt_1.hashSync)(password, 10),
        },
    });
    res.send(200).json(user);
});
exports.signup = signup;
