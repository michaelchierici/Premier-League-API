import { Router } from "express";
import { ClubController } from "../controller/ClubController";

const clubRouter = Router();

clubRouter.post("/:coachId/:leagueId", ClubController.create);

clubRouter.get("/", ClubController.findAll);

clubRouter.get("/:id", ClubController.findById);

clubRouter.patch("/:id", ClubController.update);

clubRouter.delete("/:id", ClubController.delete);

export { clubRouter };
