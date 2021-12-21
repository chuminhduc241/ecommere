const mongoose = require("mongoose");

const productSchme = mongoose.Schema({
  product_id: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: Object,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  sold: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("product", productSchme);
