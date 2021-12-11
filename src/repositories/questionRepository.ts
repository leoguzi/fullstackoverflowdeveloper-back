import connection from '../database';
import { QuestionSE } from '../services/interfaces/QuestionSE';

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

export { registerQuestion };
