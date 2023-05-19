import asyncHandler from 'express-async-handler';

// @desc    Get User Profile
// @route   POST /api/v1/users/me
// @access  Private
export const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Ok' });
});
