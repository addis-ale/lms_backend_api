import { Router } from "express";
import { login, signup } from "../controllers/auth";
import { errorHandler } from "../errorHandler";
const authRouter = Router();
authRouter.post("/signup", errorHandler(signup));
authRouter.post("/login", errorHandler(login));
export default authRouter;
