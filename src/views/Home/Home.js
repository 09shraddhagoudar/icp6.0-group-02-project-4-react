import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Home.css";
import Image1 from "./image1.jpg";
import Image2 from "./shaniwarwada.png";
import Image3 from "./lohagad.png";



function Home() {
  return (

    <div>
      <Navbar />
      <div className="home-page">
        <header className="head">


          <h1>Welcome to Fort Tour</h1>
          <p>Explore the history and beauty of ancient forts</p>
        </header>
        
        <h1 className='subheading'>Must Visit This...💜💜</h1>
        <div className="card-row">

          <div className="card">
            <img src={Image1} alt="purandar" />
            <h2>Purandar</h2>
            <p>Purandar Fort is known as the birthplace of Chhatrapati Sambhaji Maharaj, the son of Chhatrapati Shivaji Maharaj. The fort 
              of Purandhar stands at 4,472 ft.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <img src={Image2} alt=" Shanivarwada" />
            <h2> Shanivarwada</h2>
            <p>Shanivarwada Fort is a popular Fort in the city of Pune located in Maharashtra. It has great historic significance as it was
               the seat of the Marathas from 1730 to 1818.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <img src={Image3} alt="maharashtra fort" />
            <h2>Lohagadh Fort</h2>
            <p>Located in Lonavala, one of the most aesthetically appealing places near Pune, Lohagadh Fort is a beautiful piece of architecture. 
              It is a fort that was captured by Shivaji Maharaj and then by the Mughals.  </p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src={Image1} alt="purandar" />
            <h2>Janjira Fort</h2>
            <p>Surrounded by water bodies along its sides, Janjira Fort is also known as Murud Fort, as it is located in a village called Murud in 
              the state of Maharashtra.  The Fort is well-known as sea waves for ages.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <img src={Image2} alt=" Nagarkanta" />
            <h2>Daulatabad Fort</h2>
            <p>Established in the 14th century, Daulatabad Fort is popular as Devagiri and is approximately 16 Km away from Aurangabad.  It was under the rule of
                Nizams of Hyderabad in 1724 AD.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <img src={Image3} alt=" Panhala  fort" />
            <h2>Panhala Fort</h2>
            <p>One of the most beautiful forts of Maharashtra, Panhala Fort, is located in the Sahyadri mountain range, over a pass that 
              connects Bijapur in central Maharashtra. Panhala is located 20Km away from Kolhapur. PANHALa fot is popular fort.</p>
            <button>Read More</button>
          </div>
        </div>
     <hr/>
        <h2 className='subheading2'>"Discover the Past, Explore the Present, Build Your Future: Fort Tours – Where History and Adventure Unite!"</h2>
     <hr/>

      
      </div>
      <Footer />
    </div>
  )
}

export default Home