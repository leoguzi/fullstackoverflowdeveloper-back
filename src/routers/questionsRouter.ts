import * as questionsController from '../controllers/questionsController';
import userAuthentication from '../middlewares/userAuthMiddleware';
import { Router } from 'express';

const router = Router();

router.post('/', questionsController.newQuestion);
router.get('/:id', questionsController.getQuestion);
router.get('/', questionsController.getNotAnsweredQuestions);

router.use(userAuthentication);
router.post('/:id', questionsController.answerQuestion);
export default router;
