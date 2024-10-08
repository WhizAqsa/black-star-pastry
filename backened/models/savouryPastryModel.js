const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const savouryPastrySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  image: { type: String, required: true },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("SavouryPastry", savouryPastrySchema);
