import React from 'react'
import './ExploreCard.css'
import { Link } from 'react-router-dom'

function ExploreCard({id,imge,title}) {
  return (
    <div>
        <img src={imge} className='hewi rounded-circle shadow border border-dark-subtle mx-3 cur'/>
            <p className='fs-5 fw-semibold my-2 text-center'>{title.substring(0,15)}{title.length>15?"...":null}</p>
    </div>
  )
}

export default ExploreCard