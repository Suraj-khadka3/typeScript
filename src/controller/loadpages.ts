import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
// import {  Prisma } from '../../node_modules/.prisma/client/index';

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
  const { name, email, pwd }: userData = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        pwd,
      },
    });
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    console.log(error);
    res.status(401).json({ error });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const login = await prisma.user
      .findUnique({ where: { email } })
      .then((data) => {
        if (!data) throw new Error("Email not found");
        if (data.pwd == pwd)
          res.status(201).json({ loggedIn: login }).redirect("/home");
      });
  } catch (error) {
    res.status(400).json({ error });
  }
};
