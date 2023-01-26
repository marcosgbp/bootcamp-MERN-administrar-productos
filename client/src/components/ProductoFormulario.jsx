import React, { useState } from "react";
import axios from 'axios';
import Toast from "../extras/functions";

const initialForm = {
  title: "",
  price: 0,
  description: "",
};
const ProductoFormulario = () => {
  const [form, setForm] = useState(initialForm);

  const handlerChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const {title, price, description} = form;
    if(!title || !price){
        alert("Datos incompletos...");
        return;
    }
    axios.post('http://localhost:8000/api/crearproducto',{
        title,
        price,
        description
    }).then((res)=>{
        resetForm();
        Toast.fire({
            icon: 'success',
            title: 'Los datos se han insertado exitosamente'
          })
    }).catch((error)=>{
        console.log("Error...");
    })
  };
  const resetForm = () => {
    setForm(initialForm);
  }
  return (
    <div className="col-6 mx-auto">
      <h1>Formulario</h1>
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
        <button className="btn btn-success mt-3">Crear Producto</button>
      </form>
    </div>
  );
};

export default ProductoFormulario;
