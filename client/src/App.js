import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import ProductoDetalle from './components/ProductoDetalle';
import ProductoEditar from './components/ProductoEditar';
import ProductoFormulario from "./components/ProductoFormulario";
import ProductoTodos from './components/ProductoTodos';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <BarraNavegacion/>
        <Routes>
            <Route path='/nuevoproducto' element={<ProductoFormulario/>}/>
            <Route path='/listaproductos' element={<ProductoTodos/>}/>
            <Route path='/detalleproducto/:id' element={<ProductoDetalle/>}/>
            <Route path='/editarproducto/:id' element={<ProductoEditar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
