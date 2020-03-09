const express = require('express');
const { User } = require('../../db/models');

module.exports = (router) => {
  const userRouter = express.Router();

  userRouter.get('/:id', (req, res) => User.findByPk(req.params.id).then(user => user ? res.json(user) : res.sendStatus(404)));
  userRouter.post('/login', (req, res) => {
    User.findOne({ where: { userName: req.body.userName } })
      .then(user => res.json(user.userName));
  });

  router.use('/users', userRouter);
}