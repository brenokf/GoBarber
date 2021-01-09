import CreateUsersService from './CreateUsersService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHahProvider';

import AppError from '@shared/errors/AppError';


describe('CreateUser',()=>{
  it('should be able to create a new user',async ()=>{
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUsersService(fakeUsersRepository,fakeHashProvider);

    const user =  await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789'

    });
    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another ', async ()=>{
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUser = new CreateUsersService(fakeUsersRepository,fakeHashProvider);

    const user =  await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789'

    });

    expect(createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456789'
    })).rejects.toBeInstanceOf(AppError);

  });

  
 });
