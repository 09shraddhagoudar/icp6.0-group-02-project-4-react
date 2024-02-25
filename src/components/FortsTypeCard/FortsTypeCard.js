import React from 'react'
import './FortsTypeCard.css'
import { Link } from 'react-router-dom'

function FortsTypeCard({id,imge,title,description,location,link}) {
  return (
    <div className='w-35 shadow border border-dark-subtle text-centerrounded m-4 card-col'>
        <img src={imge} className='w-100 border'/>
        <div className='container'>
            <p className='fs-5 fw-semibold my-2'>{title.toUpperCase()}</p>
            <p className='fw-light fst-italic lh-sm'>{description.substring(0,111)}...<Link to={`${link}/${id}`} className='text-decoration-none fw-medium fst-italic m-2'>Read More</Link></p>
            <hr className='m-0'/>
            <div className='my-3 mb-3 fs-5 d-flex justify-content-between'>
                <button className='border py-1 w-50 rounded me-1'>
                <Link to={`${link}/${id}`} className="text-black text-decoration-none link">Learn more</Link></button>
                <button className=' border py-1 w-50 rounded ms-1'>
                <Link to="/login" className="text-black text-decoration-none link">Book Tour</Link></button>
            </div>
        </div>
    </div>
  )
}

export default FortsTypeCard