const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const errorHandler = require('../middleware/errorHandle');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', routes.userRoute);

app.use(errorHandler);

module.exports = app;
