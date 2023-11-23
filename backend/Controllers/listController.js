import { List } from "../Models/list.js";
import { validateSchema, validatePartialSchema } from "../schema/listSchema.js";

export const getAllList = async (req, res) => {
    const movies = await List.getList();
    res.json(movies);
  }

  export const getListById =  async (req, res) => {
    const { id } = req.params;
    const listId = await List.getListById({ id });
    if (!listId) return res.status(404).json({ message: "List not found" });
    res.json(listId);
  }

  export const createList =  async (req, res) => {
    const listRequest = validateSchema(req.body);
    if (!listRequest.success) {
      return res.status(400).json({ message: listRequest.error });
    }
  
    const newList = await List.createList({ input: listRequest.data });
    res.status(201).json(newList);
  }


  export const updateList =  async (req, res) => {
    const { id } = req.params;
  
    const listRequest = validatePartialSchema(req.body);
    if (!listRequest.success) {
      return res.status(400).json({ message: listRequest.error });
    }
  
    const listMod = await List.updateList({ id, input: listRequest.data });
  
    res.json(listMod);
  }


  export const deleteLIst = async (req, res) => {
    const { id } = req.params;
    const listDeleted = await List.deleteList({ id });
    if (!listDeleted) {
      return res.status(404).json({ message: "List not found" });
    } else {
      res.status(204).end();
    }
  }