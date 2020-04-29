import { Router, request, response } from 'express';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try{

  }catch (err){
    return response.status(400).json({ error: err.message })
  }
});

export default usersRouter;
