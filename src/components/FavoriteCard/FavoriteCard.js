import React from 'react'
import './FavoriteCard.css'
import { Link } from 'react-router-dom'

function FavoriteCard({imge,title,description,link}) {
  return (
    <div className='w-35 shadow border border-dark-subtle m-4 card-har'>
        <img src={imge} className='w-100 border'/>
        <div className='container'>
            <p className='fw-semibold my-2'>{title.toUpperCase()}</p>
            <p className='fw-light fst-italic lh-sm'>{description.substring(0,25)}...<Link to={link} className='text-decoration-none fw-medium fst-italic m-2'>Read More</Link></p>
            <hr className='m-0'/>
            <p className='text-center m-1 mb-3'><Link to={link}>Remove</Link></p>
        </div>
    </div>
  )
}

export default FavoriteCard