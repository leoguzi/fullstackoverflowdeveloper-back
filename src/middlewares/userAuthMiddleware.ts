import { Request, Response, NextFunction } from 'express';
import * as usersRepository from '../repositories/usersRepository';

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
    const user = await usersRepository.fetchtUserByToken(token);
    if (!user) {
      return next();
    }
    req.body.idUser = user.id;
    next();
  } catch (error) {
    next(error);
  }
}
export default userAuthentication;
