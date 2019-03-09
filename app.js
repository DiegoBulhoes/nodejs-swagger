import express from 'express';
import compression from 'compression';
import endpoints from './endpoints';
import swaggerDoc from './swaggerDoc';

const app = express(express);
app.use(compression());

app.set('port', 3000);

endpoints(app);
swaggerDoc(app);

export default app;
