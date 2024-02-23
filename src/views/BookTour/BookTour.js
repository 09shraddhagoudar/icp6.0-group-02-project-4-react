import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import React, {useState} from 'react'
import './BookTour.css'


function BookTour() {
  const[name,setName]=useState('');
  const[gender,setGender]=useState('');
  const[fort,setforts]=useState('');
  const[date,setdate]=useState('');
  const[forts,setForts]=useState([]);
  return (
    <div>
        <Navbar />
        <h1 style={{textAlign: 'center',margin: '130px',fontSize: '70px'}}> Booking Now! </h1>
        <form className='form-container'>
          <div>
            <p>Name is:{name}</p>
          <input type='text'
              placeholder='Enter your name'
              className='input'
              onChange={(e)=>{
                setName(e.target.value);
          }}
          />
        

          </div>
          <div>
            <br/>
            <p>Gender is: {gender}</p>
            <label htmlFor='Male'>
              <input type='radio' name='gender' id='male' onChange={(e)=>{
                 if(e.target.checked){
                  setGender('Male');
                 }
              }}/> Male
            
            </label>
          
            <label htmlFor='Female'>
            <input type='radio' name='gender' id='Female' onChange={(e)=>{
              if(e.target.checked){
                setGender('Female');
              }
            }}/> Female
            </label>
          </div>
          <br/>
          <div>
          <p>
          <p>select fort:{fort}</p>
        
            <input type='checkbox'
              onChange={(e)=>{
                if(e.target.checked){
                  setforts([...forts,'Hill'])
                }
                else{
                   const newforts = forts.filter((forts)=>{
                    return forts !== 'forts'
                   })
                    setforts(newforts)
                }
              }
              }
        
            />Hill
            </p>

            <p>
            <input type='checkbox'
              onChange={(e)=>{
                if(e.target.checked){
                  setforts([...forts,'Sea'])
                }
                else{
                   const newforts = forts.filter((forts)=>{
                    return forts !== 'forts'
                   })
                    setforts(newforts)
                }
              }
              }

            />Sea
            </p>
            <p>
            <input type='checkbox'
              onChange={(e)=>{
                if(e.target.checked){
                  setforts([...forts,'Forest'])
                }
                else{
                   const newforts = forts.filter((forts)=>{
                    return forts !== 'forts'
                   })
                    setforts(newforts)
                }
              }
              }
            />Forest
            </p>

          </div>
          <div>
            <p>
              <p>
              select Date:{date}
              </p>
              <input type="date" name="date"id="date"></input>
            </p>
          </div>
          <div className='btn-1' style={{textAlign:'center'}}>
          <button className='btn'>Book Tour</button>
          </div>
        </form>
        <Footer/>
    </div>
        
  )
}

export default BookTour