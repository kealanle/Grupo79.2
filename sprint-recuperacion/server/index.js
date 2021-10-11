
// requires
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");


// variables de servidor
const app = express();
const connectionString = "mongodb+srv://Kealanle:Murcielago@cluster0.zsj95.mongodb.net/Ecomerce?authSource=admin&replicaSet=atlas-vdrv54-shard-0&readPreference=primary&ssl=true";
const nombreDB="Ecomerce";


//Inicializar el servidor
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(connectionString, {
  dbName: nombreDB,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("open", function () {
  console.log("Connected to mongoDB");
});
db.on("error",function(error) {
  console.log(error);
});

// import todo schema as model
let productoModel = require("./producto_schema");

// ROUTES

app.get("/", (req, res) => {
  res.send("welcome to the home");
});

// add producto

app.post("/producto/add", (req, res) => {
  let newproducto = new productoModel();
  newproducto.precio =req.body.precio;
  newproducto.id= req.body.id;
  newproducto.title= req.body.title;
  newproducto.categoria= req.body.categoria;
  newproducto.thumbnail=req.body.thumbnail;

  newproducto.save(err => {
    if (err) {
      console.log(err);
      res.send("Error while adding producto\n" + JSON.stringify(err));
    } else {
      console.log(newproducto);
      res.send("producto added.\n"+ JSON.stringify(newproducto));
    }
  });
});




// FETCH categorias

// hombre
app.get("/producto/categoria/hombre", (req, res) => {
  productoModel.find(
    
    { categoria:"hombre" }, 
    function (err, producto) {
    if (err) {
      res.send("Error while fetching productos");
    } else {
      res.json(producto);
    }
  });
});

 //home
app.get("/producto/categoria/home", (req, res) => {
  productoModel.find(
    
    { categoria:"home" }, 
    function (err, producto) {
    if (err) {
      res.send("Error while fetching productos");
    } else {
      res.json(producto);
    }
  });
});

 //mujer
app.get("/producto/categoria/mujer", (req, res) => {
  productoModel.find(
    
    { categoria:"mujer" }, 
    function (err, producto) {
    if (err) {
      res.send("Error while fetching productos");
    } else {
      res.json(producto);
    }
  });
});

// junior
app.get("/producto/categoria/junior", (req, res) => {
  productoModel.find(
    
    { categoria:"junior" }, 
    function (err, producto) {
    if (err) {
      res.send("Error while fetching productos");
    } else {
      res.json(producto);
    }
  });
});

// accesorios
app.get("/producto/categoria/accesorios", (req, res) => {
  productoModel.find(
    
    { categoria:"accesorios" },    
     function (err, producto) {
    if (err) {
      res.send("Error while fetching productos");
    } else {
      res.json(producto);
    }
  });
});



// update
//app.post("/producto/actualizar/:id", (req, res) => {
//  productoModel.findByIdAndUpdate(
//    req.params.id,
//    {   producto.precio =req.body.precio;
//      producto.id= req.body.id;
//      newproducto.title= req.body.title;
//     newproducto.categoria= req.body.categoria;
//      newproducto.thumbnail=req.body.thumbnail; },
//
//
//    (err, todo) => {
//      if (!err) {
//        res.send("Good Work");
 //     }
 //   }
 // );
//});

 delete todo
app.delete("/todo/:id", (req, res) => {
  let query = { _id: req.params.id };
  todoModel.deleteOne(query, err => {
    if (err) {
      res.send("Error while deleting producto");
    } else {
      res.send("producto deleted");
    }
  });
});


// Levantar el servidor
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
