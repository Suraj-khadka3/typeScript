import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const home: RequestHandler = async (req, res) => {
  if (req.url == "/home") {
    const allUsers = await prisma.user.findMany();
    res.status(201).json({ allUsers });
  }
};

export const register: RequestHandler = async (req, res) => {
  if (req.url == "/register") {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json({ user });
  }
};

export const edit: RequestHandler = async (req, res) => {
  const id: number = parseInt(req.params.id);
  const { email, name } = req.body;
  const update = await prisma.user.update({
    where: { id },
    data: { email, name },
  });
  res.status(201).json(update);
};

export const remove: RequestHandler = async (req, res) => {
  if (!req.params.id) {
    throw new Error("no ID given");
  }
  const del = await prisma.user.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.status(201).json({ deletedUser: del });
};
