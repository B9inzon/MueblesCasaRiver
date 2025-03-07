import { Router } from "express";

import { FurnitureController } from "../controllers/furnitureController.js";

export const furnitureRouter = Router();

furnitureRouter.get("/", FurnitureController.getAll);
furnitureRouter.get("/:id", FurnitureController.getById);
furnitureRouter.post("/", FurnitureController.create);
furnitureRouter.patch("/:id", FurnitureController.update);
furnitureRouter.delete("/:id", FurnitureController.delete);
 