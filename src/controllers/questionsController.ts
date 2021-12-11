import { NextFunction, Request, Response } from 'express';

async function newQuestion(req: Request, res: Response, next: NextFunction) {
  try {
    return res.send(201).send({ message: 'Created!' });
  } catch (error) {
    return next(error);
  }
}

async function getQuestion(req: Request, res: Response, next: NextFunction) {
  try {
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}

async function answerQuestion(req: Request, res: Response, next: NextFunction) {
  try {
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}

async function getNotAnsweredQuestions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}

export { newQuestion, getQuestion, answerQuestion, getNotAnsweredQuestions };
