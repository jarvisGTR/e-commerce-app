import React from 'react'
import { Link } from 'react-router-dom'

const BlocCard = () => {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src='/images/blog01.png' className='img-fluid w-100' alt=''/>
            </div>
            <div className='blog-content'>
                <p className='date'>05 Novembre 2023</p>
                <h5 className='title'>title description of image blog</h5>
                <p className='description'>detail of description and product</p>
                <Link to='/Singleblog' className='button'>Read more</Link>
            </div>
        </div>
   
  )
}

export default BlocCard