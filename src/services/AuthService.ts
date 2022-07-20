import { getRepository } from "typeorm";
import { Coach } from "../entity/Coach";
import * as bcrypt from "bcrypt";

export class AuthService {
  static async checkUser(name: any, password: any) {
    const userRepository = getRepository(Coach);

    const user = await userRepository.findOne({
      where: { name },
    });
    if (!user) {
      console.log("falha no login");
      return;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      console.log("credenciais inválidas");
      return;
    }
    return user;
  }
}
