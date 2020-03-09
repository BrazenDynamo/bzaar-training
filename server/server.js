const express = require('express');
const next = require('next');
const apiRouter = require('./api');

const server = express();
const app = next({
  dev: process.env.NODE_ENV !== 'production',
});

const handle = app.getRequestHandler();

// Inject express body parsing middleware
server.use(express.json());

app.prepare().then(() => {
  server.use('/api', apiRouter);
  server.get('*', (req, res) => handle(req, res));
  server.listen(8080);
});