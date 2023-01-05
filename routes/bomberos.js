import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const rutabomberos = new Router();

rutabomberos.get("/", (req, res) => {
  res.send("Arriba bomberos");
});
export default rutabomberos;
