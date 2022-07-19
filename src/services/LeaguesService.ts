import { getRepository } from "typeorm";
import { League } from "../entity/League";

export class LeagueService {
  static create(name: string) {
    const leagueRepository = getRepository(League);
    const league = leagueRepository.create({ name });
    leagueRepository.save(league);
    return league;
  }

  static async findOne(id: any) {
    const leagueRepository = getRepository(League);
    const league = await leagueRepository.findOne({ id });
    return league;
  }
}
