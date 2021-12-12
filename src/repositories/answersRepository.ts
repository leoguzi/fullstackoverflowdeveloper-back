import connection from '../database';
import { AnswerDB } from './interfaces/AnswerDB';
import { AnswerSE } from '../services/interfaces/AnswerSE';

async function registerAnswer(answerSE: AnswerSE): Promise<AnswerDB> {
  const { idQuestion, answeredAt, answeredBy, answerText } = answerSE;
  const result = await connection.query(
    `INSERT INTO answers (id_question, answered_at, id_user, answer) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [idQuestion, answeredAt, answeredBy, answerText]
  );
  let insertedAnswer: AnswerDB;
  if (result.rowCount > 0) {
    insertedAnswer = result.rows[0];
  }
  return insertedAnswer;
}

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

export { registerAnswer, fetchAnswer };
