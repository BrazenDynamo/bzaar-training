const express = require('express');
const { User } = require('../../db/models');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (router) => {
  const userRouter = express.Router();

  userRouter.get('/:id', (req, res) => User.findByPk(req.params.id).then(user => user ? res.json(user) : res.sendStatus(404)));
  userRouter.post('/login', (req, res) => {
    if (!req.body.username || !req.body.password) {
      return res.sendStatus(401);
    }
    User.findOne({ where: { userName: req.body.username } })
      .then(user => {
        if (!!user && req.body.password === user.password) {
          // Generate JWT
          const token = jwt.sign({ userId: user.id, username: user.userName }, config.secret);
          res.cookie('bzaartraining_id_token', token, { expires: new Date(Date.now() + 36000), httpOnly: true });
          return res.status(200).send({ userId: user.id, token });
        } else {
          return res.sendStatus(401);
        }
      });
  });
  // TODO: use auth header instead of cookie
  userRouter.post('/verify-login', (req, res) => {
    const authHeader = req.headers.authorization ? req.headers.authorization.split(' ') : null;
    const token = authHeader[1] || (req.cookies && req.cookies['bzaartraining_id_token']);
    jwt.verify(token, config.secret, (e, decoded) => {
      if (e) {
        res.sendStatus(401);
        return;
      }
      res.json({ userId: user.id, username: user.userName, token });
    });
  });

  router.use('/users', userRouter);
}