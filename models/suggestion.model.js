const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suggestionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    suggestion: {
      type: String,
      required: true,
    },
    rating: {
      type: Number || String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Suggestion", suggestionSchema);
