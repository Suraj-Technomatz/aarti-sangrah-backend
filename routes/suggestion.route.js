const express = require("express");
const {
  createSuggestion,
  getAllSuggestion,
} = require("../controllers/suggestion.controller");
const router = express.Router();

router.get("/", getAllSuggestion);
router.post("/create", createSuggestion);

module.exports = router;
