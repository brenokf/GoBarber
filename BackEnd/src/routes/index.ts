import Routes from 'express';
import appointmentsRouter from './appointments.routes';


const routes = Routes();

routes.use('/appointments', appointmentsRouter);

export default routes;

