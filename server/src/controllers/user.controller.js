import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deactivateUser,
} from '../services/user.service.js';

export const getAllUsersController = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully',
      data: users,
      count: users.length,
    });
  } catch (error) {
    next(error);
  }
};

export const createUserController = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (req, res, next) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const deactivateUserController = async (req, res, next) => {
  try {
    const user = await deactivateUser(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
