const mongoose = require("mongoose");

// Schema for producto
const productoSchema = mongoose.Schema(
  {
  precio: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
  },
  categoria: {
    type: String,
  },
    thumbnail: {
    type: String,
  },

}
);

const producto = (module.exports = mongoose.model("producto", productoSchema));
