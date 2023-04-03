import { RequestHandler } from "express";
import path from "path";

export const home: RequestHandler = (req, res) => {
  if (req.url == "/home") {
    res.sendFile(path.join(__dirname + "../../../views/index.html"));
  }
};

export const register: RequestHandler = (req, res) => {
  if (req.url == "/post") {
    res.send("This is register");
  }
};

export const edit: RequestHandler = (req, res) => {
  if (req.url == "/edit") {
    res.send("this is edit");
  }
};

export const remove: RequestHandler = (req, res) => {
  if (req.url == "/remove") {
    res.send("this is remove");
  }
};
