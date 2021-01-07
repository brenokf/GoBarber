import { Router, request, response } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';
import UpadateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import UserAvatarController from '../../controllers/UserAvatarController';
import UsersController from '../../controllers/UsersController';


const usersRouter = Router();
const upload = multer(uploadConfig);
const userController  = new UsersController();
const userAvatarController  = new UserAvatarController();

usersRouter.post('/', userController.create );

usersRouter.patch('/avatar',ensureAuthenticated,upload.single('avatar'),userAvatarController.update);

export default usersRouter;
