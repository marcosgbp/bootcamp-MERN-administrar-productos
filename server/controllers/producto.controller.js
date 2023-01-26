const Productos = require("../models/producto.model");

//Agregar producto
const crearProducto = (req, res) => {
    Productos.create(req.body)
    .then((resultado)=>{
        console.log(resultado);
        res.json(resultado)
    }).catch((error)=>{
        console.log("lo sentimos no se ha podido insertar los datos...")
    })
}

module.exports = {
    crearProducto
}
    
