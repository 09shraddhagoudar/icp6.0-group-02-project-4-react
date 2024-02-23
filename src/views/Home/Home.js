import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Home.css";
import Image1 from "./image1.jpg";
import Image2 from "./shaniwarwada.png";
import Image3 from "./lohagad.png";
import Image4 from "./tour-guide.jpg";
import Image5 from "./tourist.png";
import Image6 from "./fort-night.jpg";
import Image7 from "./fun.png";
import Image8 from "./idea.png";
import Image9 from "./light.png";
import Image10 from "./book.png";



function Home() {
  return (

    <div>
      <Navbar />
        <header className="head">
          <h1>Welcome to Fort Tour</h1>
          <p>Explore the history and beauty of ancient forts</p>
          <button className='explore-more-btn d-block mx-auto'>Explore..</button>
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

        </div> <hr />
        <div className='subpart'>
          <h2 className='subheading2'>"Discover the Past, Explore the Present, Build Your Future: Fort Tours – Where History and Adventure Unite!"</h2>
          <img src={Image3} alt="maharashtra fort" className='img-size' />
          <img src={Image2} alt="maharashtra fort" className='img-size' />
          <img src={Image1} alt="maharashtra fort" className='img-size' />
        </div> <hr />
        <div className='service-card'>
          <h3>We Are Providing Different Services That You May Like..</h3>
          <div><img src={Image5} alt="maharashtra fort" className='img-service' />
            <img src={Image6} alt="maharashtra fort" className='img-service' />
            <img src={Image4} alt="maharashtra fort" className='img-service' /></div>
          <button className='learn-more-btn'>Learn More</button>
        </div>
        <div className='last-container'>
          <h3>Why Choose Us ??? </h3>
          <div className='sub-last-container'>
            <img src={Image7} alt="fun with us" className='service-img' />
            <img src={Image8} alt="we improve your Knowledge" className='service-img' />
            <img src={Image9} alt="maharashtra fort" className='service-img' />
            <img src={Image10} alt="maharashtra fort" className='service-img' />
          </div>
          <h2>Explore at your own pace with self-guided tours, complete with audio guides and interactive maps for a personalized adventure.</h2>

        </div>


      <Footer />
    </div>
  )
}

export default Home