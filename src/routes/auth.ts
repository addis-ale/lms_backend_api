import { Router } from "express";
import { signup } from "../controllers/auth";
const authRouter = Router();
authRouter.get("/signup", signup);
export default authRouter;
