import connection from '../database';
import { QuestionSE } from '../services/interfaces/QuestionSE';
import { QuestionDB } from './interfaces/QuestionDB';

async function registerQuestion(questionSE: QuestionSE): Promise<QuestionDB> {
  const { question, student, studentClass, tags, submittedAt } = questionSE;

  const result = await connection.query(
    `INSERT INTO questions 
            (question, student, class, tags, submitted_at)
                VALUES ($1, $2, $3, $4, $5) 
                  RETURNING id;`,
    [question, student, studentClass, tags, submittedAt]
  );
  const newQuestion: QuestionDB = result.rows[0];
  return newQuestion;
}

async function fetchQuestion(id: number): Promise<QuestionDB> {
  const result = await connection.query(
    `SELECT * FROM questions WHERE id=$1;`,
    [id]
  );

  const question: QuestionDB = result.rows[0];

  return question;
}

async function fetchNotAnsweredQuestions(): Promise<QuestionDB[]> {
  const result = await connection.query(
    `SELECT questions.* 
        FROM questions 
          LEFT JOIN answers 
            ON questions.id=answers.id_question 
              WHERE answers.id_question is NULL;`
  );
  const questionDBArr: QuestionDB[] = result.rows;
  return questionDBArr;
}

export { registerQuestion, fetchQuestion, fetchNotAnsweredQuestions };
