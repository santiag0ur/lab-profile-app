"use strict";

const User = require("./../../models/user");

module.exports = (req, res, next) => {
  const { username, password, campus, course } = req.body;
  User.signUp({ username, password, campus, course })
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
