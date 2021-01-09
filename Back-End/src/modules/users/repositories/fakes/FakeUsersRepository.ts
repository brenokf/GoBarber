

import IUsersRepository from "@modules/users/repositories/IUserRepository";
import User from "../../infra/typeorm/entities/User";
import ICreateUsersDTO from '@modules/users/dtos/ICreateUserDTO';
import { uuid } from "uuidv4";

class UsersRepository implements IUsersRepository {
  private users:User[] = [];

  public async findById(id:string): Promise<User| undefined>{
    const user = this.users.find(user => user.id===id);

    return user;

  }


  public async findByEmail(email:string): Promise<User| undefined>{
    const user = this.users.find(user => user.email===email)

    return user;

  }



public async create(userData:ICreateUsersDTO): Promise<User>{
  const user = new User();

  Object.assign(user,{ id:uuid()},userData);

  this.users.push(user);

  return user;

}

public async save(user: User): Promise<User>{

  const findIndex = this.users.findIndex(findUser => findUser.id === user.id)

  this.users[findIndex] = user;

  return user;
}

}

export default UsersRepository;
