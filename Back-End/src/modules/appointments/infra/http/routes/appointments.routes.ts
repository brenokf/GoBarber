import { Router, request, response } from 'express';
import AppointmentsController from '../controllers/AppointmentsController';


import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const appointmentsController = new AppointmentsController();
const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create) ;

export default appointmentsRouter;
