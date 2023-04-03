import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import router from "../routes/v1/index";
dotenv.config();

const app = express();
const portNumber = process.env.PORT;

app.listen(portNumber, () => {
  console.log(`listening to port ${portNumber}`);
});

app.use(router);

app.use((error: Error, req: Request, res: Response) => {
  if (error) {
    res.status(500).json({ message: `${req.url} cannot be reached` });
  }
});

