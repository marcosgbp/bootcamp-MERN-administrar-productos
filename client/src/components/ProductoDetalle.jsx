import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import productDefault from '../img/productDefault.png'


const ProductoDetalle = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams();
    useEffect(() => {
      axios.get(`http://localhost:8000/api/listarproducto/${id}`)
      .then((resultado)=>{
        console.log(resultado);
        setProducto(resultado.data);
      }).catch((error)=>{
        console.log("error")
      })
    }, [])
    
    return (
    <div className='mt-1'>
        <div className="cabecera text-center"><h3>{producto.title}</h3></div>
        <div className="row">
        <div className="col-6"><img src={productDefault} alt="producto default" style={{width:"200px"}} /></div>
        <div className="col-6 card">
            <h4><strong>Descripción: </strong>{producto.description}</h4>
            <h4><strong>Precio: </strong>{producto.price}Gs.</h4>
        </div>
        </div>

    </div>
  )
}

export default ProductoDetalle