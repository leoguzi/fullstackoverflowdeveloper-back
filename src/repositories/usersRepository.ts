import connection from '../database';
import { UserSE } from '../services/interfaces/UserSE';
import { UserDB } from './interfaces/UserDB';

async function registerUser(user: UserSE): Promise<UserDB> {
  const { name, studentClass, token } = user;
  const result = await connection.query(
    `INSERT INTO users (name, class, token) VALUES ($1, $2, $3) RETURNING *;`,
    [name, studentClass, token]
  );

  const userDB: UserDB = result.rows[0];
  return userDB;
}

async function fetchtUser(token: string): Promise<UserDB> {
  const result = await connection.query(`SELECT * FROM users WHERE token=$1;`, [
    token,
  ]);
  let user: UserDB;
  if (result.rowCount > 0) {
    user = result.rows[0];
  }
  return user;
}
export { registerUser, fetchtUser };
