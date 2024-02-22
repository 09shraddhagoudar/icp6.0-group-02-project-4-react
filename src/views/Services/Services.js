import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import '../Services.css';
import { Services, HEAD_TITLE } from './../Services/config';


function Services () {
  return (
    <>
  <section className='services-main-container'>
        <div className='container service-container'>
        <h1 className='main-heading text-center fw-bold'>Our Services</h1>
            <div className="row">
            { serviceData.map((curElem)=>{
              const {id,logo,title,info}=curElem;
              return(
              <>
               <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" 
               key={id}>
<i className={`fontawesome-style ${logo}`}></i>
<h2 className="sub-heading">{title}</h2>
<p>{info} </p>
            </div>
              </>);
            })}
               </div>
      </div>
     </section>
    </>
  )
}


export default Services