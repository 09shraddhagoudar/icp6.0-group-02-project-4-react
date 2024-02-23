import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import React, {useState} from 'react'
import './BookTour.css'


function BookTour() {
  const[name,setName]=useState('');
  return (
    <div>
        <Navbar />
        <h1 style={{textAlign: 'center',margin: '130px',fontSize: '70px'}}> Booking Now! </h1>
        <form className='form-container'>
          <input type='text'
              placeholder='Enter your name'
              className='input'
              onChange={(e)=>{
                setName(e.target.value);
          }}
          />
          <p>Your Name:{name}</p>
        

  
        </form>
        <Footer/>
    </div>
        
        


      
  
  )
}

export default BookTour