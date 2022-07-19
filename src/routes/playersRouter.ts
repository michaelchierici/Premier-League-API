import { Router } from "express";
import { PlayersController } from "../controller/PlayersController";

const playersRouter = Router();

playersRouter.post("/", PlayersController.create);

playersRouter.get("/", PlayersController.findAll);

playersRouter.get("/:id", PlayersController.findById);

playersRouter.patch("/:id", PlayersController.update);

playersRouter.delete("/:id", PlayersController.delete);

export { playersRouter };
