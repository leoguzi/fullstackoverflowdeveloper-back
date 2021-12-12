import { AnswerREQ } from '../../controllers/interfaces/AnswerREQ';

export interface AnswerSE extends AnswerREQ {
  answeredAt: Date;
  anseredBy: number;
}
