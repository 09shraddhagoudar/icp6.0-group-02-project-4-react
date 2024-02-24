import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './HillForts.css';
import { Hill_Forts, HEAD_TITLE, Explore_TITLE, Explore } from './config';
import FortsTypeCard from '../../components/FortsTypeCard/FortsTypeCard';
import ExploreCard from '../../components/ExploreCard/ExploreCard';
import HillFortsImage from './oth-image.jpg';
import SeaFortsImage from './../SeaForts/seaimage.jpg';
import ForestFortsImage from './../ForestForts/forest-image.jpg';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';


function HillForts() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <div className='hill-head'>
        <div className='container'>
          <div className='row'>
            <div className='mx-auto text-white text-center wit'>
              <h1 className='font'>Where Are You Headed Next?</h1>
              <p className='fs-4'>Explore Destinations & Get Inspired For Your Next Getaway</p>
              <div className='d-flex'>
                <input type="text" class="form-control rounded-0" placeholder="Things to do, places to visit, tour packages..." />
                <input type="text" class="form-control rounded-0 w-50" placeholder="In: Anywhere" />
                <input type="button" class="ex-btn bg-info border border-info rounded-0" value="Explore" fdprocessedid="7wudd"></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='card-container'>
        <div className='container'>
          <h1 className='font fw-semibold m-4 text-center'>{HEAD_TITLE}</h1>
          <div className='d-flex justify-content-around flex-wrap my-4'>{
            Hill_Forts.map((project, index) => {
              const { id, imge, title, description, location } = project;
              return (<FortsTypeCard id={id} imge={imge} title={title} description={description} location={location} key={index} link="/hillfortsmore" />);
            })
          }
          </div>
        </div>
      </div>

      <div className='card-container bg-dark-subtle'>
        <div className='container'>
          <h1 className='font fw-semibold m-3 text-center'>{Explore_TITLE}</h1>
          <div className='d-flex img-con p-4 m-2'>{
            Hill_Forts.map((img, index) => {
              const { id, imge, title } = img;
              return (<ExploreCard id={id} imge={imge} title={title} key={index} link="/hillfortsmore" />);
            })}{
            Hill_Forts.map((img, index) => {
              const { id, imge, title } = img;
              return (<ExploreCard id={id} imge={imge} title={title} key={index} link="/hillfortsmore" />);
            })}{
            Hill_Forts.map((img, index) => {
              const { id, imge, title } = img;
              return (<ExploreCard id={id} imge={imge} title={title} key={index} link="/hillfortsmore" />);
            })
          }
          </div>
        </div>
      </div>

      <div className='card-container mb-5'>
        <div className='container'>
          <h1 className='font fw-semibold mt-5 mb-4 text-center'>Other Types Of Forts</h1>
          <div className='d-flex justify-content-around flex-wrap'>
            <Link to="/hillforts" >
              <div className='position-relative h-100 shadow-sm'>
                <img src={HillFortsImage} className='oth-img border border-black'/>
                <p className='text-white fw-semibold fs-1 position-absolute top-50 start-50 translate-middle'>Hill Forts</p>
              </div>
            </Link>
            <Link to="/seaforts" >
              <div className='position-relative h-100 shadow-sm'>
                <img src={SeaFortsImage} className='oth-img border border-black'/>
                <p className='text-white fw-semibold fs-1 position-absolute top-50 start-50 translate-middle'>Sea Forts</p>
              </div>
            </Link>
            <Link to="/seaforts" >
            <div className='position-relative h-100 shadow-sm'>
              <img src={ForestFortsImage} className='oth-img border border-black'/>
              <p className='text-white fw-semibold fs-1 position-absolute top-50 start-50 translate-middle'>Forest Fort</p>
            </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-dark-subtle'>
        <div className='container'>
          <h1 className='font fw-semibold m-3 text-center'>Your Favorite Fort</h1>
          <div className='img-con-har'>{
            Hill_Forts.map((project, index) => {
              const { id, imge, title, description } = project;
              return (<FavoriteCard id={id} imge={imge} title={title} description={description} link="/hillfortsmore" />);
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HillForts