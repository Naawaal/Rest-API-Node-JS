import express from 'express';
import { APP_PORT } from './config';

const app = express();

import routes from './routes';

app.use('/api', routes);


app.listen(APP_PORT, () => {
    console.log(`Server running on port ${APP_PORT}`);}) ;