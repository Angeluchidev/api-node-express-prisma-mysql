import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const rutacargos = new Router();

rutacargos.get("/", (req, res) => {
  res.send("Arriba cargos");
});

//Crear un registo en tabla usuarios
rutacargos.post(`/crear`, async (req, res) => {
  const { descripcion } = req.body;
  const result = await prisma.cargos.create({
    data: {
      descripcion,
    },
  });
  res.json(result);
});

//Mostrar todos los registos
rutacargos.get(`/mostrar`, async (req, res) => {
  const cargos = await prisma.cargos.findMany({
    orderBy: {
      id: "desc",
    },
  });
  res.json(cargos);
});

//mostrar registro unico
rutacargos.get(`/mostrar-unico/:id`, async (req, res) => {
  const { id } = req.params;

  const cargo = await prisma.cargos.findUnique({
    where: { id: Number(id) },
  });
  res.json(cargo);
});

//Actualizar un registro
rutacargos.put(`/modificar/:id`, async (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  const cargos = await prisma.cargos.update({
    where: { id: Number(id) },
    data: { descripcion },
  });
  res.json(cargos);
});

//Eliminar un registro
rutacargos.delete(`/eliminar/:id`, async (req, res) => {
  const { id } = req.params;
  const cargos = await prisma.cargos.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(cargos);
});

//feed
rutacargos.get("/feed/:id", async (req, res) => {
  const { id } = req.params;
  const posts = await prisma.cargos.findMany({
    where: { id: Number(id) },
    include: {
      datos: {
        orderBy: {
          id: "asc",
        },

        include: { departamentos: true },
        include: { pagos: true },
      },
    },
  });
  res.json(posts);
});

export default rutacargos;
