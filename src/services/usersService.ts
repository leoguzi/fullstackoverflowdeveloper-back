import { v4 as uuid } from 'uuid';
import { UserREQ } from '../controllers/interfaces/UserREQ';
import { UserDB } from '../repositories/interfaces/UserDB';
import { UserSE } from './interfaces/UserSE';
import * as userRepository from '../repositories/usersRepository';

async function createUser(user: UserREQ): Promise<UserDB> {
  const token: string = uuid();
  const newUser: UserSE = { ...user, token };
  const insertedUser = await userRepository.registerUser(newUser);

  return insertedUser;
}

export { createUser };
