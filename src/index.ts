import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
app.listen(process.env.PORT || 8001, () => {
  console.log("api is running");
});
