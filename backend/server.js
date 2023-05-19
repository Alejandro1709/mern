import express from 'express';
import { PORT, ENV } from './config/secrets.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT} in ${ENV} mode`);
});
