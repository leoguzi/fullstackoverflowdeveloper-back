export interface NotAnsweredQuestion {
  question: string;
  student: string;
  studentClass: string;
  tags: string;
  submittedAt: Date;
  answered: boolean;
}
