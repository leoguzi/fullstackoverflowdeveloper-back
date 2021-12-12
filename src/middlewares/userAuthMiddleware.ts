import { Request, Response, NextFunction } from 'express';
import * as userRepository from '../repositories/usersRepository';
import { UserDB } from '../repositories/interfaces/UserDB';

async function userAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    return next();
  }

  const token = req.headers.authorization.replace('Bearer ', '');

  try {
    const user = await userRepository.fetchtUser(token);
    if (!user) {
      return next();
    }
    req.body = user;
    next();
  } catch (error) {
    next(error);
  }
}
export default userAuthentication;