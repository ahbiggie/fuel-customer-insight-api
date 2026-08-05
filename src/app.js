import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/env.js';
import routes from './routes/index.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

if (config.env !== 'test') {
    app.use(morgan('dev'));
}

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

export default app;