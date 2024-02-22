import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './HillForts.css';
import { Hill_Forts, HEAD_TITLE, Explore_TITLE, Explore } from './config';
import FortsTypeCard from '../../components/FortsTypeCard/FortsTypeCard';
import ExploreCard from '../../components/ExploreCard/ExploreCard';


function HillForts() {
  return (
    <div>
      <Navbar />
      <div className='head'>
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
          <div className='container d-flex justify-content-between flex-wrap my-4'>{
            Hill_Forts.map((project, index) => {
              const { id, imge, title, description, location } = project;
              return (<FortsTypeCard id={id} imge={imge} title={title} description={description} location={location} key={index} />);
            })
          }
          </div>
        </div>
      </div>

      <div className='card-container bg-dark-subtle'>
        <div className='container'>
          <h1 className='font fw-semibold m-3 text-center'>{Explore_TITLE}</h1>
          <div className='container d-flex img-con py-4'>{
            Explore.map((img, index) => {
              const { id, imge, title } = img;
              return (<ExploreCard id={id} imge={imge} title={title} key={index} />);
            })
          }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HillForts