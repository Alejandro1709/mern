import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDb from './config/connectDb.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middlewares/error.middleware.js';
import { PORT, ENV } from './config/secrets.js';

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

if (ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT} in ${ENV} mode`);
});
