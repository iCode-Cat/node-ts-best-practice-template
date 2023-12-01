import { Router } from 'express';
import * as usersController from './users.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.post('/login', usersController.logUser);
router.post('/me', authenticate, usersController.getUser);

export default router;
