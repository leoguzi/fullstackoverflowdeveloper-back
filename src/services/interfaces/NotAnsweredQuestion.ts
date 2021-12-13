export interface NotAnsweredQuestion {
  id?: number;
  question: string;
  student: string;
  studentClass: string;
  tags?: string;
  submittedAt: Date;
  answered?: boolean;
}
