const express = require("express");

const router = express.Router();

const {register, login, getProfile} = require("../controllers/auth.controller");

const {registerSchema, loginSchema} = require("../validations/auth.validation");

const authMiddleware = require("../middlewares/auth.middleware");

router.post('/register', validate(registerSchema),register);

router.post('/login', validate(loginSchema), login);

router.get('/profile', authMiddleware, getProfile);

module.exports = router;