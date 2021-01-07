import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentRepository';

describe('CreateAppointment',()=>{
  it('should be able to create a new appointment',async ()=>{
    const fakeAppointmentRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentRepository);

    const appointment =  await createAppointment.execute({
      date: new Date)(),
      provider_id: '123123123123',
    });
    expect

  });

  // it('should not be able to create two appointments on the same time',()=>{

  // });
})
