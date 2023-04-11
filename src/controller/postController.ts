import { RequestHandler } from "express";
import { ProjectError } from "../utils/errors";

export const posts: RequestHandler = async (_req, res) => {
  try {
    const allPosts = res.locals.data;
    res.status(201).json({ allPosts });
  } catch (error) {
    console.log(error);
    res.status(401).json(
      new ProjectError({
        name: "Request Error",
        message: "You are not logged in",
      })
    );
  }
};
