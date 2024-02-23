import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer bg-dark text-light shadow px-5 py-4">
      <div className="row d-flex justify-content-around">
        <div className="col-md-3 col-sm-12 m-1">
          <p className="fs-1">Heritage Horizon</p>
          <p className="fs-5 fw-light">Get a experience how the royalty lived in the past, several of these palace-turned heritage hotels are a must-visit.</p>
        </div>
        <div className="col-md-2 col-sm-12 m-1">
          <p className="fs-2 m-0">Links</p><hr className="w-50 m-0" />
          <ul className="fs-5">
            <Link className="har-dec" to="/"><li className="list-group-item m-2">Home</li></Link>
            <Link className="har-dec" to="/about"><li className="list-group-item m-2">About</li></Link>
            <Link className="har-dec" to="/services"><li className="list-group-item m-2">Services</li></Link>
            <Link className="har-dec" to="/login"><li className="list-group-item m-2">Login/Register</li></Link>
            <Link className="har-dec" to="/booktour"><li className="list-group-item m-2">Book Tour</li></Link>
          </ul>
        </div>
        <div className="col-md-2 col-sm-12 m-1">
          <p className="fs-2 m-0">Forts Type</p><hr className="w-50 m-0" />
          <ul className="fs-5">
            <Link className="har-dec" to="/hillforts"><li className="list-group-item m-2">Hill Forts</li></Link>
            <Link className="har-dec" to="/seaforts"><li className="list-group-item m-2">Sea Forts</li></Link>
            <Link className="har-dec" to="/forestforts"><li className="list-group-item m-2">Forest Forts</li></Link>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12 m-1">
          <p className="fs-2 m-0">Contact us</p><hr className="w-50 m-0" />
          <ul className="fs-5">
            <li className="list-group-item m-2">📌 84, Heritage Horizon, Laxmi Narayan Chowk, Opposite Narayana Residency, Ward No 3, Prasad Colony, Nagpur - 441108</li>
            <li className="list-group-item m-2">📱<a href="mob:8010564343" className="text-decoration-none">+91 8010564343</a></li>
            <li className="list-group-item m-2">✉️<a href="mailto:hemantagl206@gmail.com" className="text-decoration-none"> heritagehorizon@gmail.com</a></li>
          </ul>
        </div>
        <hr className="w-50"/>
        <p className="fs-4 text-center">Heritage Horizon</p>
      </div>
    </div>
  )
}

export default Footer