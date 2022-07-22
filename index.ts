import express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import { PublicRoutes } from "./src/routes/public";
import { authMiddleware } from "./src/middlewares/authMiddleware";
import { PrivateRoutes } from "./src/routes/private";

export class AppController {
  static run() {
    const app = express();
    createConnection();
    app.use(express.json());
    app.use("/api", PublicRoutes);
    app.use("/api", authMiddleware, PrivateRoutes);
    app.listen(3050, () => {
      console.log("server is running on http://localhost:3050");
    });
  }
}

AppController.run();
