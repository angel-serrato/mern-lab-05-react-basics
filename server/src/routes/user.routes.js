import express from 'express';
import {
  getAllUsersController,
  createUserController,
  getUserByIdController,
  updateUserController,
  deactivateUserController,
} from '../controllers/user.controller.js';
import {
  validateUserCreate,
  validateUserUpdate,
} from '../validators/user.validator.js';
import { validateObjectId } from '../validators/id.validator.js';

const router = express.Router();

router.get('/', getAllUsersController);
router.post('/', validateUserCreate, createUserController);
router.get('/:id', validateObjectId, getUserByIdController);
router.put('/:id', validateObjectId, validateUserUpdate, updateUserController);
router.delete('/:id', validateObjectId, deactivateUserController);

export default router;
