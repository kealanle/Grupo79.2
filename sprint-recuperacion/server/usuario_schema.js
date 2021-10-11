const mongoose = require("mongoose");

// Schema for usuario
const usuarioSchema = mongoose.Schema(
  {
  usuario: {
    type: String,
    required: true
  },
  contraseña: {
    type: Boolean,
    required: true
  }
}
);

const usuario = (module.exports = mongoose.model("usuario", usuarioSchema));
