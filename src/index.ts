import express, { Request, Response } from "express";
import dotenv from "dotenv";
import rootRouter from "./routes";
import { errorMiddleware } from "./middlewares/error";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", rootRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
app.use(errorMiddleware);
app.listen(process.env.PORT || 8001, () => {
  console.log("api is running");
});
