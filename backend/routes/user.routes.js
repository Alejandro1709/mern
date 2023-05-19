import { Router } from 'express';
import {
  getProfile,
  updateProfile,
  deleteProfile,
} from '../controllers/user.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = Router();

router
  .route('/me')
  .get(protect, getProfile)
  .put(protect, updateProfile)
  .delete(protect, deleteProfile);

export default router;
