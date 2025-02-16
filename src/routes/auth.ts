import { Router } from "express";
import { signup } from "../controllers/auth";
import { errorHandler } from "../errorHandler";
const authRouter = Router();
authRouter.post("/signup", errorHandler(signup));
export default authRouter;
