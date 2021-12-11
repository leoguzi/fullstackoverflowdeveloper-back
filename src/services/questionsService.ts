import * as questionRepository from '../repositories/questionRepository';
import { QuestionREQ } from '../controllers/interfaces/QuestionREQ';
import { QuestionSE } from './interfaces/QuestionSE';

async function createQuestion(questionREQ: QuestionREQ): Promise<number> {
  const questionSE: QuestionSE = {
    ...questionREQ,
    submittedAt: new Date(),
  };

  const result = await questionRepository.registerQuestion(questionSE);

  return result;
}

export { createQuestion };
