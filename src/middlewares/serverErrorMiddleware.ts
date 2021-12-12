import { Request, Response, NextFunction } from 'express';

export default async function serverError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  return res.sendStatus(500);
}
