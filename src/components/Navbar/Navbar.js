import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-harshal p-2 border-bottom border-black shadow-sm">
        <div className="container-fluid mx-5">
            
            <a className="navbar-brand ms-md-5 ms-md-0 fs-2" href="#">Heritage Horizon</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link fs-5 mx-2" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/hillforts" className="nav-link dropdown-toggle mx-2 fs-5" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Forts
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/hillforts" className="dropdown-item fs-5">Hill Forts</Link></li>
                            <li><Link to="/seaforts" className="dropdown-item fs-5">Sea Forts</Link></li>
                            <li><Link to="/forestforts" className="dropdown-item fs-5">Forest Forts</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link mx-2 fs-5">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link mx-2 fs-5">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link mx-2 fs-5">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link mx-2 fs-5">Login/Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bookTour" className="nav-link mx-2 me-5 fs-5" >Book Tour</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar