const express = require("express");
const { getAllAarti } = require("../controllers/aarti.controller");
const router = express.Router();

router.get("/", getAllAarti);

module.exports = router;
