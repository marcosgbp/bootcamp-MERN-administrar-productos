const ControladorProducto = require('../controllers/producto.controller');

module.exports = (app) => {
    app.post('/api/crearproducto', ControladorProducto.crearProducto);
}