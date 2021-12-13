import { NextFunction, Request, Response } from 'express';
import * as usersService from '../services/usersService';
import { UserREQ } from './interfaces/UserREQ';
import { UserDB } from '../repositories/interfaces/UserDB';

async function newUser(req: Request, res: Response, next: NextFunction) {
  const user: UserREQ = req.body;

  if (!user.name || !user.studentClass) {
    return res.status(400).send({ message: 'Bad request' });
  }
  try {
    const newUser = await usersService.createUser(user);
    return res.status(201).send({ token: newUser.token });
  } catch (error) {
    next(error);
  }
}
export { newUser };
