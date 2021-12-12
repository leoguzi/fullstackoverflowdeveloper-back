import connection from '../database';
import { AnswerDB } from './interfaces/AnswerDB';

async function fetchAnswer(idQuestion: number): Promise<AnswerDB> {
  const result = await connection.query(
    `SELECT * FROM answers WHERE id_question=$1;`,
    [idQuestion]
  );
  let answer: AnswerDB;
  if (result.rowCount > 0) {
    answer = result.rows[0];
  }

  return answer;
}

export { fetchAnswer };
