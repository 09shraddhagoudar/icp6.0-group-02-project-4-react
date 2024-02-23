import React from 'react'
import './ExploreCard.css'
import { Link } from 'react-router-dom'

function ExploreCard({id,imge,title,link}) {
  return (
    <div>
      <Link to={link} className='text-black text-decoration-none'>
        <img src={imge} className='hewi rounded-circle shadow border border-dark-subtle mx-3 cur'/>
            <p className='fs-5 fw-semibold my-2 text-center'>{title.substring(0,15)}{title.length>15?"...":null}</p>
      </Link>
    </div>
  )
}

export default ExploreCard