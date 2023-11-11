import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
  return (
    <>
    <Meta title={"Whislist"}/>
    <BreadCrumb title='Whishlist'/>
    <div className='wishlist-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                    
                        <div className='wishlist-card-image'>
                            <img src='/images/watch01.jpg' alt='watch'/>
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>type & brand & name</h5>
                        <h6 className='price'>100.00 DZD</h6>
                        </div>                       
                    </div>
                </div>

                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                    
                        <div className='wishlist-card-image'>
                            <img src='/images/watch01.jpg' alt='watch'/>
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>type & brand & name</h5>
                        <h6 className='price'>100.00 DZD</h6>
                        </div>                       
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Wishlist