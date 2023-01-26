import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import productDefault from '../img/productDefault.png';
import Swal from 'sweetalert2';
import Toast from '../extras/functions';


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
    }, []);
    //Redireccionamiento
    const navigate = useNavigate();
    const eliminarProduto = () => {
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
                    navigate("/listaproductos");
                })
            }
          })
    }
    
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
        <Link to={`/editarproducto/${producto._id}`} className='btn btn-warning' >Editar</Link>
        <button className='btn btn-danger' onClick={eliminarProduto}>Eliminar</button>
    </div>
  )
}

export default ProductoDetalle