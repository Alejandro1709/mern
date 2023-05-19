import axios from 'axios';

export const login = async (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axios.post('/auth/login', { email, password }, config);

  console.log(data);
};
