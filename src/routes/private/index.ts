import { Router } from "express";
import { clubRouter } from "../private/clubRouter";
import { coachRouter } from "../private/coachRouter";
import { playersRouter } from "../private/playersRouter";
import { leagueRouter } from "../private/leagueRouter";

const PrivateRoutes = Router();

PrivateRoutes.use("/club", clubRouter);
PrivateRoutes.use("/coach", coachRouter);
PrivateRoutes.use("/player", playersRouter);
PrivateRoutes.use("/league", leagueRouter);

export { PrivateRoutes };
