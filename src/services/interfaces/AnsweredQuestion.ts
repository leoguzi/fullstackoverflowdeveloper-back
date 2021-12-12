import { NotAnsweredQuestion } from './NotAnsweredQuestion';

interface AnsweredQuestion extends NotAnsweredQuestion {
  answeredAt: Date;
  answeredBy: string;
  answer: string;
}
