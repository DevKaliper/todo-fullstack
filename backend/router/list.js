import {Router} from 'express';
import {validateSchema, validatePartialSchema} from '../schema/listSchema.js';  
import { randomUUID } from "node:crypto";
import { requireJSON } from "./../utils/requireJSON.js";
const list = requireJSON("../list.json");

export const listRouter = Router();

listRouter.get("/", (req, res) => {
    res.json(list);
  })

  listRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const listId = list.find((list) => list.id === id);
    if (!listId) return res.status(404).json({ message: "List not found" });
    res.json(listId);
  });


  listRouter.post("/", (req, res) => {
    const listRequest = validateSchema(req.body);
    if (!listRequest.success)
      return res.status(400).json({ message: listRequest.error });
    let date = new Date().toISOString();
    date = date.split("T")[0];
  
    const newList = {
      id: randomUUID(),
      date,
      ...listRequest.data,
    };
  
    list.push(newList);
    res.status(201).json(newList);
  });

  listRouter.patch("/:id", (req, res) => {
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

  listRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    const listMod = findIndex((list) => list.id === id);
    if (listMod === -1)
      return res.status(404).json({ message: "List not found" });
  
    list.splice(listMod, 1);
    res.status(204).end();
  });
  