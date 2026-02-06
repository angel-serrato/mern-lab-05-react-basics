import User from '../models/user.model.js';

export const getAllUsers = async () => {
  return await User.find({ isActive: true });
};

export const createUser = async (userData) => {
  return await User.create(userData);
};

export const getUserById = async (userId) => {
  return await User.findById({ _id: userId, isActive: true });
};

export const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

export const deactivateUser = async (userId) => {
  return await User.findByIdAndUpdate(
    userId,
    { isActive: false, deactivatedAt: new Date() },
    { new: true }
  );
};
