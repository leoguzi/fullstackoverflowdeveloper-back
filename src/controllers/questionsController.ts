import { NextFunction, Request, Response } from 'express';
import questionSchema from '../validation/questionSchema';
import * as questionService from '../services/questionsService';
import * as answerRepository from '../repositories/answersRepository';
import { QuestionREQ } from './interfaces/QuestionREQ';

async function newQuestion(req: Request, res: Response, next: NextFunction) {
  if (questionSchema.validate(req.body).error) {
    return res.status(400).send({ message: 'Bad Request.' });
  }

  const question: QuestionREQ = req.body;

  try {
    const id = await questionService.createQuestion(question);
    return res.status(201).send({ id: id });
  } catch (error) {
    return next(error);
  }
}

async function getQuestion(req: Request, res: Response, next: NextFunction) {
  const idQuestion: number = Number(req.params.id);
  const answer = await answerRepository.fetchAnswer(idQuestion);
  if (!answer) {
    const question = await questionService.findNotAnsweredQuestion(idQuestion);
    return res.status(200).send(question);
  }
  return res.sendStatus(200);
  try {
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
