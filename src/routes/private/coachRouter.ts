import { Router } from "express";
import { CoachController } from "../../controller/CoachController";

const coachRouter = Router();

coachRouter.post("/", CoachController.create);

coachRouter.get("/", CoachController.findAll);

coachRouter.get("/:id", CoachController.findById);

coachRouter.patch("/:id", CoachController.update);

coachRouter.delete("/:id", CoachController.delete);

export { coachRouter };
