import { startOfHour }from 'date-fns';


import {getCustomRepository} from 'typeorm';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import AppError from '@shared/errors/AppError';


// 🇸OLID

// Dependency Inversion




interface IRequest {
  provider_id: string,
  date:Date
}



class CreateAppointmentService{
  public async execute({ date , provider_id }: IRequest): Promise<Appointment>{
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
      );

     if(findAppointmentInSameDate){
       throw new AppError( 'This appointment is already booked',401);
     }




      const appointment = await appointmentsRepository.create({
        provider_id,
        date: appointmentDate,
      });

      return appointment;
  }
}

export default CreateAppointmentService;
