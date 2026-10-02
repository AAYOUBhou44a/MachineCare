const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const {machineSchema} = require("../validations/machine.validation");
const {validate} = require("../middlewares/validate.middleware");
const {create} = require("../controllers/machine.controller");

const router = express.Router();

router.post('/machine/create',authMiddleware, validate(machineSchema), create);