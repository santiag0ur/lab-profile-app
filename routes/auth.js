"use strict";

const { Router } = require("express");
const router = Router();

const uploadImageMiddleware = require("./../middleware/image-upload");
const routeGuardMiddleware = require("./../middleware/route-guard");

const signUpController = require("./../controllers/auth/sign-up");
const logInController = require("./../controllers/auth/log-in");
const logOutController = require("./../controllers/auth/log-out");
const loggedInController = require("./../controllers/auth/logged-in");
const editController = require("./../controllers/auth/edit");
const uploadController = require("./../controllers/auth/upload");

router.post("/signup", routeGuardMiddleware(false), signUpController);
router.post("/login", routeGuardMiddleware(false), logInController);
router.post("/logout", routeGuardMiddleware(true), logOutController);
router.get("/loggedin", loggedInController);
router.post("/edit", routeGuardMiddleware(true), editController);

router.post(
  "/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadController
);

module.exports = router;
