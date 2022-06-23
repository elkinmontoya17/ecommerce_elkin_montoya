import React from 'react'
import { Link } from 'react-router-dom'
import imagenlogo from  '../images/logo.png'
import CarWidget from './CarWidget'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img src={imagenlogo} alt="" width="45" height="30"Y/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Todos los Productos</Link>                 </li>
        <li className="nav-item">
          <Link to="/categoria/frutas" className="nav-link" href="#">Frutas</Link>
        </li>
        <li className="nav-item">
          <Link to="/categoria/nueces" className="nav-link" href="#">Nueces</Link>
        </li>
      </ul>
      <CarWidget items={4} />
    </div>
  </div>
</nav>
  )
}

export default NavBar