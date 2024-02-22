import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="Footer  text-white d-flex flex-column">
      <h1>Fortress Tour</h1>
      <Link to="/" className="text-white text-decoration-none my-3">Home</Link>
      <Link to="/services" className="text-white text-decoration-none my-3">Services</Link>
      <Link to="/about" className="text-white text-decoration-none my-3">About</Link>
      <Link to="/contact" className="text-white text-decoration-none my-3">Contact</Link>
      <Link to="/login" className="text-white text-decoration-none my-3">Login</Link>
      <Link to="/bookTour" className="text-white text-decoration-none my-3">BookTour</Link>
    </div>
  )
}

export default Footer