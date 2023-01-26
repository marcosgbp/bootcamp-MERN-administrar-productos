import React from 'react'
import { NavLink } from 'react-router-dom'

const BarraNavegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#e3f2fd"}}>
        <div className="container-fluid">
            <NavLink className="navbar-brand" to={"/listaproductos"}>Coding Store</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to={"/listaproductos"} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/nuevoproducto"} className="nav-link">Nuevo Producto</NavLink>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default BarraNavegacion