import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const createdUser = new User();

    Object.assign<User, User>(createdUser, {
      email,
      name,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(createdUser);

    return createdUser;
  }

  findById(id: string): User | undefined {
    const findedUser = this.users.find((user) => user.id === id);

    return findedUser;
  }

  findByEmail(email: string): User | undefined {
    const findedUser = this.users.find((user) => user.email === email);

    return findedUser;
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser, {
      admin: true,
      updated_at: new Date(),
    });

    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
