const express = require("express");
const auth = require("../middleware/auth");
const loginController = require("../controllers/login");
const profileController = require("../controllers/profile");
const router = express.Router();

router.post("/login", loginController);

router.use(auth); // always use before all the protected routes
//beacuse the next() in the middleware protects our routes

router.get("/profile", profileController);

module.exports = router;
