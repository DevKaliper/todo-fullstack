const express = require("express");
const list = require("./list.json");
const crypto = require("node:crypto");
const cors = require("cors");
const app = express();
const {
  validateSchema,
  validatePartialSchema,
} = require("./schema/listSchema.js");
const PORT = process.env.PORT || 3001;

app.disable("x-powered-by");
app.use(
  cors({
    origin: (origin, callback) => { // Para permitir el acceso a la API desde el frontend en modo desarrollo
      const whitelist = ["http://localhost:3000"];
      if (!origin || whitelist.some((domain) => domain === origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

// Para obtener los datos de todas las listas
app.get("/list", (req, res) => {
  res.json(list);
});

// Para obtener los datos de una lista en particular
app.get("/list/:id", (req, res) => {
  const { id } = req.params;
  const listId = list.find((list) => list.id === id);
  if (!listId) return res.status(404).json({ message: "List not found" });
  res.json(listId);
});

// Para crear una lista en particular
app.post("/list", (req, res) => {
  const listRequest = validateSchema(req.body);
  if (!listRequest.success)
    return res.status(400).json({ message: list.error });
  let date = new Date().toISOString();
  date = date.split("T")[0];

  const newList = {
    id: crypto.randomUUID(),
    date,
    ...listRequest.data,
  };

  list.push(newList);
  res.status(201).json(newList);
});

// Para actualizar los datos de una lista en particular
app.patch("/list/:id", (req, res) => {
  const { id } = req.params;
  const listMod = list.findIndex((list) => list.id === id);
  if (listMod === -1)
    return res.status(404).json({ message: "List not found" });

  const listRequest = validatePartialSchema(req.body);
  if (!listRequest.success)
    return res.status(400).json({ message: listRequest.error });

  list[listMod] = {
    ...list[listMod],
    ...listRequest.data,
  };

  res.json(list[listMod]);
});

// Para eliminar una lista en particular
app.delete("/list/:id", (req, res) => {
  const { id } = req.params;
  const listMod = list.findIndex((list) => list.id === id);
  if (listMod === -1)
    return res.status(404).json({ message: "List not found" });

  list.splice(listMod, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
