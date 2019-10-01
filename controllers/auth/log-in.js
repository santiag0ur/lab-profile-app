"use strict";

const User = require("./../../models/user");

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  User.signIn({ username, password })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
};
