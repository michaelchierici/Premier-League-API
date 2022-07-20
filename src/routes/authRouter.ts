import { Router } from "express";
import { AuthController } from "../controller/AuthController";

const authRouter = Router();

authRouter.post("/", AuthController.checkUser);

export { authRouter };
