import * as answersRepository from '../repositories/answersRepository';
import { AnswerDB } from '../repositories/interfaces/AnswerDB';
import { AnswerREQ } from '../controllers/interfaces/AnswerREQ';
import { AnswerSE } from './interfaces/AnswerSE';
import QuestionsError from '../errors/QuestionsError';

async function createAnswer(answer: AnswerREQ): Promise<AnswerDB> {
  const answerSE: AnswerSE = { ...answer, answeredAt: new Date() };
  const checkIfIsAnswered = await answersRepository.fetchAnswer(
    answer.idQuestion
  );
  if (checkIfIsAnswered) {
    throw new QuestionsError('This question has already been answered.');
  }
  const result = await answersRepository.registerAnswer(answerSE);
  return result;
}

export { createAnswer };
