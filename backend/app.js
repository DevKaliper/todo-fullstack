import express, { json } from "express";
import { listRouter } from "./router/list.js";
import { corsMiddleware } from "./middlewares/cors.js";
const app = express();

const PORT = process.env.PORT ?? 3001;

app.disable("x-powered-by");
app.use(corsMiddleware());
app.use(json());

// Rutas de la API REST de listas
app.use("/list", listRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
