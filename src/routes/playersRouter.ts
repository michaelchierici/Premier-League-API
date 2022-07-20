import { Router } from "express";
import { PlayersController } from "../controller/PlayersController";

const playersRouter = Router();

playersRouter.post("/", PlayersController.create);

playersRouter.get("/", PlayersController.findAll);

playersRouter.get("/:clubId", PlayersController.findClubPlayers);

playersRouter.patch("/:playerId/:clubId", PlayersController.updateClub);

export { playersRouter };
