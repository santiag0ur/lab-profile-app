"use strict";

const { Router } = require("express");
const router = Router();

const User = require("./../models/user");

router.post("/signup", (req, res, next) => {
  const { username, password, campus, course } = req.body;
  User.signUp({ username, password, campus, course })
    .then(user => {
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/loggedin", (req, res, next) => {
  const user = {
    username: "abc",
    campus: "Miami",
    course: "WebDev"
  };
  res.json({ user });
});

module.exports = router;
