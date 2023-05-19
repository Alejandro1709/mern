import express from 'express';
import authRoutes from './routes/auth.routes.js';
import { PORT, ENV } from './config/secrets.js';

const app = express();

app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT} in ${ENV} mode`);
});
