import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const rutadatos = new Router();

rutadatos.get("/", (req, res) => {
  res.send("Arriba Datos");
});

export default rutadatos;
