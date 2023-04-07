import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { ProjectError } from "../utils/errors";

const prisma = new PrismaClient();

interface userData {
  name: string;
  pwd: string;
  email: string;
}
interface post {
  title: string;
  body: string;
  id: string;
}

export const home: RequestHandler = async (_req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(201).json({ allUsers });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const register: RequestHandler = async (req, res) => {
  const { name, pwd, email }: userData = req.body;
  const data: userData = {
    name,
    pwd,
    email,
  };
  try {
    const user = await prisma.user.create({
      data,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const edit: RequestHandler = async (req, res) => {
  const id: string = req.params.id;
  const { email, name }: userData = req.body;
  try {
    const update = await prisma.user.update({
      where: { id },
      data: { email, name },
    });
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const remove: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const delpost = await prisma.post.deleteMany({ where: { userId: id } });
    const del = await prisma.user.delete({
      where: { id },
    });
    res.status(201).json({ deletedUser: del, deletedPosts: delpost });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const post: RequestHandler = async (req, res) => {
  try {
    const { title, body, id }: post = req.body;
    const data = { title, body, userId: id };
    const post = await prisma.post.create({
      data,
    });
    res.status(200).json({ post });
  } catch (error) {
    res.status(401).json({ error });
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, pwd } = req.body;
    const user = await prisma.user.findUniqueOrThrow({ where: { email } });
    if (user.pwd == pwd) res.status(201).json({ loggedIn: user });
    next();
  } catch (error) {
    res.status(401).json(
      new ProjectError({
        name: "Post Error",
        message: "Email or Password is invalid",
      })
    );
  }
};
