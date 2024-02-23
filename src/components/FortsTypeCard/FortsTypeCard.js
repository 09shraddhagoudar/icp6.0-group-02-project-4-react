import React from 'react'
import './FortsTypeCard.css'
import { Link } from 'react-router-dom'

function FortsTypeCard({id,imge,title,description,location}) {
  return (
    <div className='w-35 shadow border border-dark-subtle text-centerrounded my-4'>
        <img src={imge} className='w-100 border'/>
        <div className='container'>
            <p className='fs-5 fw-semibold my-2'>{title.substring(0,15)}{title.length>15?"...":null}</p>
            <p className='fw-light fst-italic lh-sm'>{description.substring(0,111)}...<Link to="/hillfortsmore" className='text-decoration-none fw-medium fst-italic m-2'>Read More</Link></p>
            <hr className='m-0'/>
            <div className='my-3 mb-3 fs-5 d-flex justify-content-between'>
                <button className='bg-body-secondary border py-1 w-50 rounded me-1'>
                <Link to="/hillfortsmore" className="text-black text-decoration-none link">Learn more</Link></button>
                <button className='bg-body-secondary border py-1 w-50 rounded ms-1'>
                <Link to="/" className="text-black text-decoration-none link">Book Tour</Link></button>
            </div>
        </div>
    </div>
  )
}

export default FortsTypeCard