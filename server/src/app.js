import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import notFound from './middlewares/not-found.middleware.js';
import errorHandler from './middlewares/error.middleware.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    api: 'MERN Lab 05 - React Basics',
    version: '1.0.0',
    status: 'Running',
  });
});

app.use('/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
