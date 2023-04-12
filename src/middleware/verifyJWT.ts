import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type UserPayload = {
  email: string;
};

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies) {
    token = req.cookies;
  }

  if (!token) {
    res.status(400).json({ Message: "no token" });
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as unknown as UserPayload;

    req.currentUser = payload;

    next();
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    res.status(400).json({ success: false, message });
  }
};