import { DeepPartial, getRepository } from "typeorm";
import { Club } from "../entity/Club";
import { Coach } from "../entity/Coach";
import { League } from "../entity/League";

export class ClubService {
  static async create(name: string, coach: Coach, league: League) {
    const clubRepository = getRepository(Club);
    const club = clubRepository.create({ name, coach, league });
    clubRepository.save(club);

    return club;
  }

  static async findAll() {
    const clubRepository = getRepository(Club);
    const clubs = await clubRepository.find({});
    return clubs;
  }

  static async findOne(id: any) {
    const clubRepository = getRepository(Club);
    const club = await clubRepository.find({ id });
    return club;
  }
}
