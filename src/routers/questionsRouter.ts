import * as questionsController from '../controllers/questionsController';
import { Router } from 'express';

const router = Router();

router.post('/', questionsController.newQuestion);
router.get('/:id', questionsController.getQuestion);
router.get('/', questionsController.getNotAnsweredQuestions);

// auth middleware aqui
router.post('/:id', questionsController.answerQuestion);
export default router;
