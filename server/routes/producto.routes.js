const ControladorProducto = require('../controllers/producto.controller');

module.exports = (app) => {
    app.post('/api/crearproducto', ControladorProducto.crearProducto);
    app.get('/api/listarproductos', ControladorProducto.listarProductos);
    app.get('/api/listarproducto/:id', ControladorProducto.listarProducto);
}