import React from 'react'
import './FortsMoreTypeCard.css'
import { Link } from 'react-router-dom'

function FortsMoreTypeCard({id,imge,title,description,location}) {
  return (
        <div className='row border border-2 w-75 h-100 my-4 mx-auto'>
            <h1 className='fs-1 fw-bold my-3'>{id}. {title}</h1>
            <img src={imge} className='img-h'/>
            <p className='fs-4 fst-italic my-3'>📌 {location}</p>
            <p className='me-4 text-js'>{description}<br></br><Link to="/hillforts" className=' text-decoration-none fw-bolder fst-italic fs-4'>Read Less</Link></p>
        </div>
  )
}

export default FortsMoreTypeCard