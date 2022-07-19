import { Request, Response } from "express";
import { CoachService } from "../services/CoachService";

export class CoachController {
  static async create(req: Request, res: Response) {
    const { name, password } = req.body;
    const response = CoachService.create(name, password);
    res.status(200).json(response);
  }
  static async findAll(req: Request, res: Response) {
    const response = await CoachService.findAll();
    res.status(200).json(response);
  }
  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await CoachService.findOne(id);
    res.status(200).json(response);
  }
  static async update(req: Request, res: Response) {
    console.log(res);
  }
  static async delete(req: Request, res: Response) {
    console.log(res);
  }
}
