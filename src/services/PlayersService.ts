import { getRepository } from "typeorm";
import { Club } from "../entity/Club";
import { Player } from "../entity/Player";

export class PlayerService {
  static create(name: any, number: any) {
    const playerRepository = getRepository(Player);
    const player = playerRepository.create({ name, number });
    playerRepository.save(player);
    return player;
  }

  static async findAll() {
    const playerRepository = getRepository(Player);
    const players = await playerRepository.find({});
    return players;
  }

  static async findOne(id: number) {
    const playerRepository = getRepository(Player);
    const players = await playerRepository.findOne({ id });
    return players;
  }

  static async update(id: any, playerId: any) {
    const playerRepository = getRepository(Player);
    const club = await playerRepository.findOne(id);
    const clubUpdated = playerRepository.merge(club, {
      id,
    });
    await playerRepository.save(clubUpdated);
    console.log(`${clubUpdated.name}`);
    return clubUpdated;
  }

  static async findPlayersOfClub(clubId: any, club: any) {
    const playerRepository = getRepository(Player);
    const playersOfaClub = await playerRepository.find({
      where: { club: { id: clubId } },
    });
    return { club, players: playersOfaClub };
  }
}
