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
//Listar todos los productos
const listarProductos = (req, res) => {
    Productos.find(req.body)
    .then((resultado)=> {
        console.log(resultado);
        res.json(resultado);
    }).catch((error)=> {
        console.log("Error en la busqueda");
    })
}
//Buscar un producto
const listarProducto = (req, res) => {
    Productos.findById({_id:req.params.id}, req.body)
    .then((resultado)=> {
        res.json(resultado)
    }).catch((error)=> {
        console.log("Error en la busqueda del prodcuto...")
    })
}

module.exports = {
    crearProducto,
    listarProductos,
    listarProducto
}
    
