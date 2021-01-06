import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {

    const { email, password} = request.body;
    const userRepository = new UsersRepository();
    const authenticateUser = new AuthenticateUserService(userRepository);

   const { user,token } = await authenticateUser.execute({
      email,
      password,
    });
    delete user.password;


    return response.json({ user, token });

});
export default sessionsRouter;
