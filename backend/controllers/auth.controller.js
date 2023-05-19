import asyncHandler from 'express-async-handler';

// @desc    Login User / set token
// @route   POST /api/v1/auth/login
// @access  Public
export const login = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Hello User' });
});

// @desc    Register User / set token
// @route   POST /api/v1/auth/register
// @access  Public
export const register = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Hello New User' });
});
