const mongoose = require('mongoose');

const SchemaProductos = mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    }
}, {timestamps:true})

const Productos = mongoose.model("Productos", SchemaProductos);
module.exports = Productos;