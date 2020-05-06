import {getRepository} from 'typeorm';
import User from '../models/User';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
  user_id:string;
  avatarFilename:string;

}

class UpadteUserAvatarService {
  public async execute({ user_id, avatarFilename }:Request): Promise<User>{
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(user_id);

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

    await usersRepository.save(user);

    return user;

  }

}


export default UpadteUserAvatarService;
