import express from 'express';
import cors from 'cors';
import questionsRouter from './routers/questionsRouter';
import usersRouter from './routers/usersRouter';
import serverError from '../middlewares/serverErrorMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

// QUESTIONS
app.use('/questions', questionsRouter);

// USERS
app.use('/users', usersRouter);

app.use(serverError);

export default app;
