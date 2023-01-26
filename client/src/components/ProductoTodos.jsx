import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import deleteIcon from '../img/delete.png';
import Toast from '../extras/functions';
import Swal from 'sweetalert2';

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
    //Redireccionamiento
    const navigate = useNavigate();
    const borrarProducto = (e) =>{
        let id = e.target.dataset.id;
        Swal.fire({
            title: 'Estas seguro/a de eliminar?',
            text: "Una vez confirmado el borrado ya no se podra recuperar lo borrado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro!',
            cancelButtonText: 'Cancelar Borrado'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/eliminarproducto/${id}`)
                .then((resultado)=> {
                    Toast.fire({
                        icon: 'success',
                        title: 'El producto se ha eliminado éxitosamente'
                        });
                        axios.get('http://localhost:8000/api/listarproductos')
                        .then((resultado)=>{
                            setLista(resultado.data)
                        }).catch((error)=> {
                            console.log("Error...");
                        })
                      
                })
            }
          })
    }
    
  return (
    <div className='text-center'>
        <h3>Lista de productos</h3>
        <div className="d-flex justify-content-evenly flex-wrap">
            {
                lista.length==0? <div className="alert alert-info">No hay datos que mostrar</div>:
                lista.map((el, index)=>(
                    <div className='card' key={index}>
                        <div className="card-header bg-success d-flex justify-content-between" style={{height:"auto", padding:"5px"}}>
                            <h5>{el.title}</h5>
                            <span role="button">
                                <img 
                                    src={deleteIcon} 
                                    style={{width:"16px", height:"16px"}} 
                                    alt="icono delete"
                                    data-id={el._id}
                                    onClick={borrarProducto} 
                                />
                            </span>
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