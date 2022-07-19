import { getRepository } from "typeorm";
import { Coach } from "../entity/Coach";

export class CoachService {
  static create(name: string, password: string) {
    const coachRepository = getRepository(Coach);
    const coach = coachRepository.create({ name, password });
    coachRepository.save(coach);
    return coach;
  }

  static async findAll() {
    const coachRepository = getRepository(Coach);
    const coachs = await coachRepository.find({});
    return coachs;
  }

  static async findOne(id: any) {
    const coachRepository = getRepository(Coach);
    const coach = await coachRepository.findOne({ id });
    return coach;
  }
}
