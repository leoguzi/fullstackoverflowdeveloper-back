import * as questionRepository from '../repositories/questionsRepository';
import { QuestionREQ } from '../controllers/interfaces/QuestionREQ';
import { QuestionSE } from './interfaces/QuestionSE';
import { NotAnsweredQuestion } from './interfaces/NotAnsweredQuestion';
import { AnsweredQuestion } from './interfaces/AnsweredQuestion';
import { AnswerDB } from '../repositories/interfaces/AnswerDB';
import * as usersRepository from '../repositories/usersRepository';
import QuestionsError from '../errors/QuestionsError';

async function createQuestion(questionREQ: QuestionREQ): Promise<number> {
  const questionSE: QuestionSE = {
    ...questionREQ,
    submittedAt: new Date(),
  };
  const result = await questionRepository.registerQuestion(questionSE);
  const id: number = result.id;
  return id;
}

async function findNotAnsweredQuestion(
  id: number
): Promise<NotAnsweredQuestion> {
  const question = await questionRepository.fetchQuestion(id);
  if (!question) {
    throw new QuestionsError('Question not found!');
  }
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

async function findAnsweredQuestion(
  answer: AnswerDB
): Promise<AnsweredQuestion> {
  const question = await questionRepository.fetchQuestion(answer.id_question);
  const answeredBy = await usersRepository.fetchtUserById(answer.id_user);
  const answeredQuestion: AnsweredQuestion = {
    question: question.question,
    student: question.student,
    studentClass: question.class,
    tags: question.tags,
    answered: true,
    submittedAt: question.submitted_at,
    answeredBy: answeredBy.name,
    answeredAt: answer.answered_at,
    answer: answer.answer,
  };

  return answeredQuestion;
}

async function findNotAnsweredQuestions(): Promise<NotAnsweredQuestion[]> {
  const result = await questionRepository.fetchNotAnsweredQuestions();

  const notAnsweredQuestios: NotAnsweredQuestion[] = result.map((question) => ({
    id: question.id,
    question: question.question,
    student: question.student,
    submittedAt: question.submitted_at,
    tags: question.tags,
    studentClass: question.class,
    answered: false,
  }));

  return notAnsweredQuestios;
}
export {
  createQuestion,
  findNotAnsweredQuestion,
  findAnsweredQuestion,
  findNotAnsweredQuestions,
};
