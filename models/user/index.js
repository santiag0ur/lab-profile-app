"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    required: true,
    enum: [
      "Madrid",
      "Barcelona",
      "Miami",
      "Paris",
      "Berlin",
      "Amsterdam",
      "México",
      "Sao Paulo",
      "Lisbon"
    ]
  },
  course: {
    type: String,
    required: true,
    enum: ["WebDev", "UX/UI", "Data Analytics"]
  },
  image: {
    type: String
  }
});

const signInStatic = require("./statics/sign-in");
const signUpStatic = require("./statics/sign-up");
const findByUsernameStatic = require("./statics/find-by-username");

schema.statics.signIn = signInStatic;
schema.statics.signUp = signUpStatic;
schema.statics.findByUsername = findByUsernameStatic;

const User = mongoose.model("User", schema);

module.exports = User;
