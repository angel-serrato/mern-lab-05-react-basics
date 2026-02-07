import { Types } from 'mongoose';

export function validateObjectId(req, res, next) {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: 'Invalid Mongoose ID format',
    });
  }
  next();
}
