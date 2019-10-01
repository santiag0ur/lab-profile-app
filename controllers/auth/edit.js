"use strict";

const User = require("./../../models/user");

module.exports = (req, res, next) => {
  const { username, campus, course } = req.body;
  // const data = {};
  // if (username) data.username = username;
  // if (campus) data.campus = campus;
  // if (course) data.course = course;
  User.findByIdAndUpdate(
    req.user._id,
    {
      ...(username && { username }),
      ...(campus && { campus }),
      ...(course && { course })
    },
    { new: true }
  )
    .then(user => {
      if (!user) {
        next(new Error("USER_NOT_FOUND"));
        return;
      }
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
};
