import asyncHandler from 'express-async-handler';

// @desc    Get User Profile
// @route   GET /api/v1/users/me
// @access  Private
export const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

// @desc    Update User Profile
// @route   PUT /api/v1/users/me
// @access  Private
export const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

// @desc    Delete User Profile
// @route   DELETE /api/v1/users/me
// @access  Private
export const deleteProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Ok' });
});
