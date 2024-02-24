import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Contact.css"
import Image1 from "./telephone.png";
import Image2 from "./email.png";
import Image3 from "./location.png";

function Contact() {
  return (
    <div>
        <Navbar />

        <h1 className="contact-heading">Contact Us</h1>

        <div className="contact-card">
        <img src={Image1} alt="telephone" className='contact-img'/>
        <li className="location">📱<a href="mob:8010564343" className="text-decoration-none">+91 8010564343</a></li>
        </div>

        <div className="contact-card">
        <img src={Image2} alt="email" className='contact-img'/>
        <p className='location'>fortresstour@gmail.com</p>
        </div>

        <div className="contact-card">
        <img src={Image3} alt="telephone" className='contact-img'/>
        <p className='location'>84, ,Laksmi narayan chowk ,opposite narayan residency, ward no 3 , prasad colony, Nagpur-441108</p>
        </div>

        <Footer />
    </div>
  )
}

export default Contact