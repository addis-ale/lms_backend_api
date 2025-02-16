"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const error_1 = require("./middlewares/error");
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
exports.prismaClient = new client_1.PrismaClient({
    log: ["query"],
});
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use(error_1.errorMiddleware);
app.listen(process.env.PORT || 8001, () => {
    console.log("api is running");
});
