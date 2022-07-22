import { Router } from "express";
import { LeaguesController } from "../../controller/LeaguesController";

const leagueRouter = Router();

leagueRouter.post("/", LeaguesController.create);

leagueRouter.get("/:id", LeaguesController.findById);

leagueRouter.patch("/:id", LeaguesController.update);

leagueRouter.delete("/:id", LeaguesController.delete);

export { leagueRouter };
