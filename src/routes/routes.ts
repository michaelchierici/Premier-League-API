import { Router } from "express";
import { clubRouter } from "./clubRouter";
import { coachRouter } from "./coachRouter";
import { playersRouter } from "./playersRouter";
import { leagueRouter } from "./leagueRouter";

const Routes = Router();

Routes.use("/club", clubRouter);
Routes.use("/coach", coachRouter);
Routes.use("/player", playersRouter);
Routes.use("/league", leagueRouter);

export { Routes };
