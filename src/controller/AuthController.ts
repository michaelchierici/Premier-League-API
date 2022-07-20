import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  static async checkUser(req: Request, res: Response) {
    const { name, password } = req.body;
    const response = await AuthService.checkUser(name, password);

    if (response) {
      res.status(200).json(response);
    }
    if (!response) {
      res.status(500).json({ message: "credenciais inválida!" });
    }
  }
}
