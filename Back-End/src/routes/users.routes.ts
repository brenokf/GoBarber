import { Router, request, response } from 'express';
import CreateUserService from '../services/CreateUsersService';
import multer from 'multer';
import uploadConfig from '../config/upload';
import UpadateUserAvatarService from '../services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {

    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
 
});

usersRouter.patch('/avatar',ensureAuthenticated,upload.single('avatar'), async (request, response) => {

    const updateUserAvatar = new UpadateUserAvatarService();

   const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename:request.file.filename,
    });

    delete user.password;
    return response.json(user);


});

export default usersRouter;
