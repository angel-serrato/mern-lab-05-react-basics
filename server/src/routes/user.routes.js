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

const router = express.Router();

router.get('/', getAllUsersController);
router.post('/', validateUserCreate, createUserController);
router.get('/:id', getUserByIdController);
router.put('/:id', validateUserUpdate, updateUserController);
router.delete('/:id', deactivateUserController);

export default router;
