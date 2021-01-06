

import IUsersRepository from "@modules/users/repositories/IUserRepository";
import User from "../entities/User";
import {getRepository, Repository} from "typeorm"

import ICreateUsersDTO from '@modules/users/dtos/ICreateUserDTO';


class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>
  constructor(){
    this.ormRepository = getRepository(User)
  }
  public async findById(id:string): Promise<User| undefined>{
    const user = await this.ormRepository.findOne(id);

    return user;
  }
  public async findByEmail(email:string): Promise<User| undefined>{
    const user = await this.ormRepository.findOne({
      where:{ email}
    });

    return user;

  }

public async create(userData:ICreateUsersDTO): Promise<User>{
  const appointment = this.ormRepository.create(userData);

  await this.ormRepository.save(appointment);
  return appointment;
}

public async save(user: User): Promise<User>{
  return this.ormRepository.save(user);
}
}

export default UsersRepository;
