import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const targetUser = this.usersRepository.findById(user_id);

    if (!targetUser) {
      throw new Error("User not exists");
    }

    return targetUser;
  }
}

export { ShowUserProfileUseCase };
