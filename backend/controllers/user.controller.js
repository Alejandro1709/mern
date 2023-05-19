import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';

// @desc    Get User Profile
// @route   GET /api/v1/users/me
// @access  Private
export const getProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

// @desc    Update User Profile
// @route   PUT /api/v1/users/me
// @access  Private
export const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) user.password = req.body.password;

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

// @desc    Delete User Profile
// @route   DELETE /api/v1/users/me
// @access  Private
export const deleteProfile = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndRemove(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User Not Found');
  }

  res.status(200).json({ message: 'User Removed' });
});
