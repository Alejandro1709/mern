import axios from 'axios';

export const login = async (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axios.post(
    '/api/v1/auth/login',
    { email, password },
    config
  );

  return data;
};

export const register = async (name, email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axios.post(
    '/api/v1/auth/register',
    { name, email, password },
    config
  );

  return data;
};
