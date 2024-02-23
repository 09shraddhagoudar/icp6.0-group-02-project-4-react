import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar shadow fs-5 d-flex justify-content-between text-white">
        <div className="fs-2 fw-bold">Fortress Tours </div>
        <div className="nabar-menu">
            <Link to="/" className="text-white text-decoration-none mx-4">Home</Link>
            <Link to="/hillforts" className="text-white text-decoration-none mx-4 dropdown-toggle" data-bs-toggle="dropdown">Forts</Link>
              <ul className="dropdown-menu">
                  <li><Link className="dropdown-item fs-5" to="/hillforts">Hill Forts</Link></li>
                  <li><Link className="dropdown-item fs-5" to="/seaforts">Sea Forts</Link></li>
                  <li><Link className="dropdown-item fs-5" to="/forestforts">Forest Forts</Link></li>
              </ul>
            <Link to="/services" className="text-white text-decoration-none mx-4">Services</Link>
            <Link to="/about" className="text-white text-decoration-none mx-4">About</Link>
            <Link to="/contact" className="text-white text-decoration-none mx-4">Contact</Link>
            <Link to="/login" className="text-white text-decoration-none mx-4">Login</Link>
            <Link to="/bookTour" className="text-white text-decoration-none mx-4">BookTour</Link>
        </div>
    </div>)
}

export default Navbar