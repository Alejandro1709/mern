import { Router } from 'express';
import { getProfile } from '../controllers/user.controller.js';

const router = Router();

router.get('/me', getProfile);

export default router;
