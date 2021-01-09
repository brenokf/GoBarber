import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentRepository';
import AppError from '@shared/errors/AppError';


describe('CreateAppointment',()=>{
  it('should be able to create a new appointment',async ()=>{
    const fakeAppointmentRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentRepository);

    const appointment =  await createAppointment.execute({
      date: new Date(),
      provider_id: '123123123123',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123123123');

  });

  it('should not be able to create two appointments on the same time', async ()=>{
    const fakeAppointmentRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentRepository);


    const appointmentDate = new Date(2021, 7 , 1 ,20);
    const appointment =  await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123123123',
    });

    expect(createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123123123',
    })).rejects.toBeInstanceOf(AppError);

  });
})
