import { Router } from 'express';


const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try{

    return response.json();
  }catch (err){
    return response.status(400).json({ error: err.message })
  }
});
