import { Request, Response } from "express";
import { ClubService } from "../services/ClubService";
import { CoachService } from "../services/CoachService";
import { LeagueService } from "../services/LeaguesService";

export class ClubController {
  static async create(req: Request, res: Response) {
    const { name } = req.body;
    const { coachId, leagueId } = req.params;
    const coach = await CoachService.findOne(coachId);
    const league = await LeagueService.findOne(leagueId);
    const response = await ClubService.create(name, coach, league);
    res.status(200).json(response);
  }
  static async findAll(req: Request, res: Response) {
    const response = await ClubService.findAll();
    res.status(200).json(response);
  }
  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await ClubService.findOne(id);
    res.status(200).json(response);
  }
  static async update(req: Request, res: Response) {
    console.log(res);
  }
  static async delete(req: Request, res: Response) {
    console.log(res);
  }
}
