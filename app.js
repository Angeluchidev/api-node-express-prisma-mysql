// importano express
import express from "express";
import rutacargos from "./routes/cargos.js";
import rutabomberos from "./routes/bomberos.js";
import rutadatos from "./routes/datos.js";

//Asignando express a variable app
const app = express();
const port = 3000;

// asignando formato json a la aplicación
app.use(express.json());

//llamado de rutas
app.use("/cargos", rutacargos);
app.use("/bomberos", rutabomberos);
app.use("/datos", rutadatos);

app.use(express.static("public"));

//Levantar un archivo index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.listen(port, () => {
  console.log("arrancando la app");
});
