import { Request, Response } from "express";
import { LeagueService } from "../services/LeaguesService";

export class LeaguesController {
  static async create(req: Request, res: Response) {
    const { name } = req.body;
    const response = LeagueService.create(name);
    res.status(200).json(response);
  }
  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await LeagueService.findOne(id);
    res.status(200).json(response);
  }
  static async update(req: Request, res: Response) {
    console.log(res);
  }
  static async delete(req: Request, res: Response) {
    console.log(res);
  }
}
