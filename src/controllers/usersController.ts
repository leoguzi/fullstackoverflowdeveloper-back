import { NextFunction, Request, Response } from 'express';
import * as usersService from '../services/usersService';
import { UserREQ } from './interfaces/UserREQ';
import { UserDB } from '../repositories/interfaces/UserDB';

async function newUser(req: Request, res: Response, next: NextFunction) {
  const userREQ: UserREQ = req.body;
  if (!userREQ.name || !userREQ.studentClass) {
    return res.status(400).send({ message: 'Bad request' });
  }
  const newUser: UserDB = await usersService.createUser(userREQ);

  return res.status(201).send({ token: newUser.token });
}
export { newUser };
