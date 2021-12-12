export interface QuestionDB {
  id: number;
  question: string;
  student: string;
  class: string;
  tags: string;
  submitted_at: Date;
}
