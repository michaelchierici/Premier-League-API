import { Request, Response } from "express";
import { ClubService } from "../services/ClubService";
import { PlayerService } from "../services/PlayersService";

export class PlayersController {
  static async create(req: Request, res: Response) {
    const { name, number } = req.body;
    const response = PlayerService.create(name, number);
    res.status(200).json(response);
  }
  static async findAll(req: Request, res: Response) {
    const response = await PlayerService.findAll();
    res.status(200).json(response);
  }
  static async findClubPlayers(req: Request, res: Response) {
    const { clubId } = req.params;
    const club = await ClubService.findOne(clubId);
    const response = await PlayerService.findPlayersOfClub(clubId, club);
    res.status(200).json(response);
  }
  static async updateClub(req: Request, res: Response) {
    const { clubId } = req.params;
    const { playerId } = req.params;
    const response = await PlayerService.update(clubId, playerId);
    res.status(200).json(response);
  }
}
