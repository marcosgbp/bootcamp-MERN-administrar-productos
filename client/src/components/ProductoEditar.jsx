import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Toast from '../extras/functions';

const initialForm = {
    title: "",
    price: 0,
    description: "",
  };

const ProductoEditar = () => {
    const [form, setForm] = useState(initialForm);

    //Obtenemos el id del producto a editar
    const {id} = useParams(); 

    //Redireccionamiento
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/listarproducto/${id}`)
        .then((resultado)=> {
            console.log(resultado)
            setForm(resultado.data)
        }).catch((error)=>{
            console.log("Error...")
        })
    }, [])
    const handlerChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        const {title, price, description} = form;     
        axios.put(`http://localhost:8000/api/editarproducto/${id}`,{
            title,
            price,
            description
        }).then((resultado)=>{
            Toast.fire({
                icon: 'success',
                title: 'Los datos se han editado exitosamente'
                })
            navigate("/listaproductos");
        }).catch((error)=>{
            console.log("Error...")
        })
       
    }   
  return (
    <div className="col-6 mx-auto">
      <h1>Editar Producto</h1>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          className="form-control"
          name="title"
          onChange={handlerChange}
          value={form.title}
        />
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          className="form-control"
          name="price"
          onChange={handlerChange}
          value={form.price}
        />
        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          className="form-control"
          name="description"
          onChange={handlerChange}
          value={form.description}
        />
        <button className="btn btn-success mt-3">Editar Producto</button>
      </form>
    </div>
  )
}

export default ProductoEditar