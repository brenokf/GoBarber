
import IAppointmentsRepository from "@modules/appointments/repositories/IAppointmentsRepository";
import Appointment from "@modules/appointments/infra/typeorm/entities/Appointment";
import {isEqual} from 'date-fns';
import {fromString, uuid} from 'uuidv4';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';



class FakeAppointmentRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date:Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(
      appointment => isEqual(appointment.date,date)
      );
    return findAppointment;

  }
public async create({provider_id,date}:ICreateAppointmentDTO): Promise<Appointment>{

  const appointment = new Appointment();

  Object.assign(appointment,{ id: uuid(), date, provider_id})

  this.appointments.push(appointment);

  return appointment;
}
}

export default FakeAppointmentRepository;
