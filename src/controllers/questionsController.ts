import { NextFunction, Request, Response } from 'express';
import questionSchema from '../validation/questionSchema';
import * as questionService from '../services/questionsService';
import * as answersRepository from '../repositories/answersRepository';
import * as answersService from '../services/answersService';
import { QuestionREQ } from './interfaces/QuestionREQ';
import { AnswerREQ } from './interfaces/AnswerREQ';
import QuestionsError from '../errors/QuestionsError';

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
  try {
    const answer = await answersRepository.fetchAnswer(idQuestion);
    if (!answer) {
      const question = await questionService.findNotAnsweredQuestion(
        idQuestion
      );
      return res.status(200).send(question);
    }
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}

async function answerQuestion(req: Request, res: Response, next: NextFunction) {
  if (!req.body.idUser) {
    return res.status(401).send({ message: 'Unauthorized!' });
  }

  const idQuestion: number = Number(req.params.id);
  const answeredBy: number = req.body.idUser;

  if (!req.body.answer || !idQuestion) {
    return res.status(400).send({ message: 'Bad Request.' });
  }

  const answerText: string = req.body.answer;
  const answer: AnswerREQ = { answeredBy, idQuestion, answerText };

  try {
    const result = await answersService.createAnswer(answer);

    return res.sendStatus(200);
  } catch (error) {
    if (error instanceof QuestionsError) {
      return res.status(409).send({ message: error.message });
    }
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
