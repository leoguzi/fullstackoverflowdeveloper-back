import { NotAnsweredQuestion } from './NotAnsweredQuestion';

export interface AnsweredQuestion extends NotAnsweredQuestion {
  answeredAt: Date;
  answeredBy: string;
  answer: string;
}
