const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aartiSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    lyrics: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Aarti", aartiSchema);
