import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-harshal p-2 border border-bottom border-black shadow-sm">
        <div class="container-fluid mx-5">
            <a class="navbar-brand ms-md-5 ms-md-0 fs-2" href="#">Foodzie</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link to="/" class="nav-link fs-5 mx-2" aria-current="page" >Home</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <Link to="/hillforts" class="nav-link dropdown-toggle mx-2 fs-5" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Forts
                        </Link>
                        <ul class="dropdown-menu">
                            <li><Link to="/hillforts" class="dropdown-item fs-5">Hill Forts</Link></li>
                            <li><Link to="/seaforts" class="dropdown-item fs-5">Sea Forts</Link></li>
                            <li><Link to="/forestforts" class="dropdown-item fs-5">Forest Forts</Link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <Link to="/services" class="nav-link mx-2 fs-5">Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link mx-2 fs-5">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link mx-2 fs-5">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" class="nav-link mx-2 fs-5">Login/Register</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/bookTour" class="nav-link mx-2 me-5 fs-5" >Book Tour</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar