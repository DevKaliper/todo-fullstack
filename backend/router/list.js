import { Router } from "express";
import { Movie } from "../Models/movie.js";
import { validateSchema, validatePartialSchema } from "../schema/listSchema.js";
export const listRouter = Router();

listRouter.get("/", async (req, res) => {
  const movies = await Movie.getMovie();
  res.json(movies);
});

listRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const listId = await Movie.getMovieById({ id });
  if (!listId) return res.status(404).json({ message: "List not found" });
  res.json(listId);
});

listRouter.post("/", async (req, res) => {
  const listRequest = validateSchema(req.body);
  if (!listRequest.success) {
    return res.status(400).json({ message: listRequest.error });
  }

  const newList = await Movie.createMovie({ input: listRequest.data });
  res.status(201).json(newList);
});

listRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;

  const listRequest = validatePartialSchema(req.body);
  if (!listRequest.success) {
    return res.status(400).json({ message: listRequest.error });
  }

  const listMod = await Movie.updateMovie({ id, input: listRequest.data });

  res.json(listMod);
});

listRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const listDeleted = await Movie.deleteMovie({ id });
  if (!listDeleted) {
    return res.status(404).json({ message: "List not found" });
  } else {
    res.status(204).end();
  }
});
