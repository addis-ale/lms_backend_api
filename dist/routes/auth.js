"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const errorHandler_1 = require("../errorHandler");
const auth_2 = __importDefault(require("../middlewares/auth"));
const authRouter = (0, express_1.Router)();
authRouter.post("/signup", (0, errorHandler_1.errorHandler)(auth_1.signup));
authRouter.post("/login", (0, errorHandler_1.errorHandler)(auth_1.login));
authRouter.get("/me", [auth_2.default], (0, errorHandler_1.errorHandler)(auth_1.me));
exports.default = authRouter;
