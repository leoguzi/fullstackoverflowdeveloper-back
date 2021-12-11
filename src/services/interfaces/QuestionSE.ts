import { QuestionREQ } from '../../controllers/interfaces/QuestionREQ';

export interface QuestionSE extends QuestionREQ {
  submittedAt: Date;
}
