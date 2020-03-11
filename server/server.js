const express = require('express');
const cookieParser = require('cookie-parser');
const next = require('next');
const apiRouter = require('./api');

const server = express();
const app = next({
  dev: process.env.NODE_ENV !== 'production',
});

const handle = app.getRequestHandler();

// Inject express body parsing middleware
server.use(express.json());
server.use(cookieParser());

app.prepare().then(() => {
  server.use('/api', apiRouter);
  server.get('*', (req, res) => handle(req, res));
  server.listen(8080);
});