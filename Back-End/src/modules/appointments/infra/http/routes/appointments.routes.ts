import { Router, request, response } from 'express';
import {parseISO} from 'date-fns';

import AppointmentsRepository from '@modules/appointments/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';




const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/',async ( request, response)=>{

  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});


appointmentsRouter.post('/', async (request, response) => {

  const {provider_id,date} = request.body;

  const parsedDate = parseISO(date);
  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);

});

export default appointmentsRouter;
