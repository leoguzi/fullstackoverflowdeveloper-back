import * as questionRepository from '../repositories/questionRepository';
import { QuestionREQ } from '../controllers/interfaces/QuestionREQ';
import { QuestionSE } from './interfaces/QuestionSE';
import { NotAnsweredQuestion } from './interfaces/NotAnsweredQuestion';

async function createQuestion(questionREQ: QuestionREQ): Promise<number> {
  const questionSE: QuestionSE = {
    ...questionREQ,
    submittedAt: new Date(),
  };

  const result = await questionRepository.registerQuestion(questionSE);

  return result;
}

async function findNotAnsweredQuestion(
  id: number
): Promise<NotAnsweredQuestion> {
  const question = await questionRepository.fetchQuestion(id);
  const notAnsweredQuestion: NotAnsweredQuestion = {
    question: question.question,
    student: question.student,
    submittedAt: question.submitted_at,
    tags: question.tags,
    studentClass: question.class,
    answered: false,
  };
  return notAnsweredQuestion;
}
export { createQuestion, findNotAnsweredQuestion };
