import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductoTodos = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/listarproductos')
        .then((resultado)=>{
            setLista(resultado.data)
        }).catch((error)=> {
            console.log("Error...");
        })
    }, [])
    
  return (
    <div className='text-center'>
        <h3>Lista de productos</h3>
        <div className="d-flex justify-content-evenly flex-wrap">
            {
                lista.map((el, index)=>(
                    <div className='card' key={index}>
                        <div className="card-header bg-success">
                            {el.title}
                        </div>
                        <div className="card-body">
                            {el.description}
                            <p>Ha tan solo <span className='badge bg-primary'>{el.price}</span>Gs.</p>
                        </div>
                        <div className='card-footer'>
                           <Link className='btn btn-primary' to={`/detalleproducto/${el._id}`}>Ver más</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductoTodos