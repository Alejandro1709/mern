import { Router } from 'express';
import {
  getProfile,
  updateProfile,
  deleteProfile,
} from '../controllers/user.controller.js';

const router = Router();

router.route('/me').get(getProfile).put(updateProfile).delete(deleteProfile);

export default router;
