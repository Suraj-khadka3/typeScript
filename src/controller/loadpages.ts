import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const home: RequestHandler = async (_req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(201).json({ allUsers });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const register: RequestHandler = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const edit: RequestHandler = async (req, res) => {
  const id: number = parseInt(req.params.id);
  const { email, name } = req.body;
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
    const del = await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(201).json({ deletedUser: del });
  } catch (error) {
    res.status(400).json(error);
  }
};
