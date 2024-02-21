const express = require("express");
const { getAllAarti, createAarti } = require("../controllers/aarti.controller");
const router = express.Router();

router.get("/", getAllAarti);
router.post("/create", createAarti);

module.exports = router;
