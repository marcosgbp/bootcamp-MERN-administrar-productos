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
//Listar un producto
const listarProducto = (req, res) => {
    Productos.findById({_id:req.params.id}, req.body)
    .then((resultado)=> {
        res.json(resultado)
    }).catch((error)=> {
        console.log("Error en la busqueda del prodcuto...")
    })
}
//Editar un producto
const editarProducto = (req, res)=> {
    Productos.updateOne({_id:req.params.id}, req.body)
    .then((resultado)=>{
        res.json(resultado);
    }).catch((error)=>{
        console.log("Error...");
    })
}

//Eliminar producto
const eliminarProducto = (req, res)=> {
    Productos.deleteOne({_id:req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log("Error. No se ha podido borrar el dato")
    })
}

module.exports = {
    crearProducto,
    listarProductos,
    listarProducto,
    editarProducto,
    eliminarProducto
}
    
