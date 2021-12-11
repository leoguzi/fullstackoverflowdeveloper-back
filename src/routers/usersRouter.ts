import * as usersController from '../controllers/usersController';
import { Router } from 'express';

const router = Router();

router.post('/', usersController.newUser);

export default router;
