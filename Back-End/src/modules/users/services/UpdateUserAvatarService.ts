import {getRepository} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import path from 'path';
import fs from 'fs';
import IUsersRepository from '../repositories/IUserRepository';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id:string;
  avatarFilename:string;

}

class UpadteUserAvatarService {


  constructor(private userRepository: IUsersRepository){}
  public async execute({ user_id, avatarFilename }:IRequest): Promise<User>{

    const user = await this.userRepository.findById(user_id);

    if(!user){
      throw new AppError('Only authenticated users can change avatar.',401);
    }
    if(user.avatar){
        //Replaces the database file with the new file
      const userAvatarFilePath = path.join(uploadConfig.directory,user.avatar);

        //method that identifies if a file already exists in the database
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);


      if(userAvatarFileExists){
        // method to delete the existing file in the database
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    user.avatar = avatarFilename;

    await this.userRepository.save(user);

    return user;

  }

}


export default UpadteUserAvatarService;
