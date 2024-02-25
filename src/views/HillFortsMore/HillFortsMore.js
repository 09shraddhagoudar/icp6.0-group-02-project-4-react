import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Hill_Forts} from './../HillForts/config';
import FortsMoreTypeCard from '../../components/FortsMoreTypeCard/FortsMoreTypeCard';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { useParams } from 'react-router-dom';

function Home() {
 const { id } = useParams();
 const val = id;
  return (
    <div>
        <ScrollToTop/>
        <Navbar/>
        <div className='card-container'>
            <div className='container'>
                <div className='container d-flex justify-content-between flex-wrap my-4'>{
                    Hill_Forts.map((project, index) => {
                        const { id, imge, title, description, location } = project;
                        if(val == id){
                            return (<FortsMoreTypeCard id={id} imge={imge} title={title} description={description} location={location} key={index}/>);
                        }
                    })
                }
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home