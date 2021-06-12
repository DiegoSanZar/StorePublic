import React, {useState} from 'react'
import {Link} from "react-router-dom" 

function NavTop() {
    const [estaColapsado, setEstaColapsado] = useState(true)
    const manejarNavbar = () => setEstaColapsado(!estaColapsado)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-navbar bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">LupeStore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!estaColapsado ? true : false} onClick={manejarNavbar} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${estaColapsado ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/confycategory">Confy</Link>
              </li>
              
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/carrito">Ir a Carrito</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default NavTop
