const mongoose = require("mongoose");

// Schema for usuario
const usuarioSchema = mongoose.Schema(
  {
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required:[true, 'el email es obligatorio' ] 
  },
  password: {
      type: String,
      required: [true, 'la contraseña es obligatoria' ]
    },
  departamento: {
      type: String,
      required: true
    },
  ciudad: {
      type: String,
      required: true
    },
  postalcode: {
      type: String,
      required: true
    },
    direccion: {
      type: String,
      required: true
    }

}
);

const usuario = (module.exports = mongoose.model("usuario", usuarioSchema));
