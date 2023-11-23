import { Router } from "express";
import { createList,updateList,deleteLIst,getAllList, getListById } from "../Controllers/listController.js";

export const listRouter = Router();

listRouter.get("/", getAllList );

listRouter.get("/:id", getListById );

listRouter.post("/", createList );

listRouter.patch("/:id", updateList);

listRouter.delete("/:id", deleteLIst);
