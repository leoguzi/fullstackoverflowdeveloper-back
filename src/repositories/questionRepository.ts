import connection from '../database';

import { QuestionSE } from '../services/interfaces/QuestionSE';
import { QuestionDB } from '../repositories/interfaces/QuestionDB';

async function registerQuestion(questionSE: QuestionSE): Promise<number> {
  const { question, student, studentClass, tags, submittedAt } = questionSE;

  const result = await connection.query(
    `INSERT INTO questions 
            (question, student, class, tags, submitted_at)
                VALUES ($1, $2, $3, $4, $5) RETURNING id;`,
    [question, student, studentClass, tags, submittedAt]
  );
  const id: number = result.rows[0].id;
  return id;
}

async function fetchQuestion(id: number): Promise<QuestionDB> {
  const result = await connection.query(
    `SELECT * FROM questions WHERE id=$1;`,
    [id]
  );

  const question: QuestionDB = result.rows[0];

  return question;
}
export { registerQuestion, fetchQuestion };
