import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
    const {grid} =props
    let location = useLocation(); 
    console.log(location);
  return (
    <>
    <div 
    className={`${location.pathname = "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to=':id' className='product-card position-relative'>
        
            <div className='wishlist-icon position-absolute'>
               
                <button className='border-0 bg-transparent'><img src='/images/wish.svg' alt='wishlist'/></button>
            </div>
            <div className='product-image'>
                <img src='/images/watch.jpg' className='img-fluid' alt='product image'/>
                <img src='/images/watch01.jpg' className='img-fluid' alt='product image'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Amazfit</h6>
                <h5 className='product-title'>
                    description and specifications
                </h5>
                <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />
                <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>give title name mark and more specification and description of your product to atract customer to buy</p>
                <p className='price'>100.00 DZD</p>
            </div>
            <div className='action-bar position-absolute'>

                <div className='d-flex flex-column gap-15'>
                    <Link><img src='/images/prodcompare.svg' alt='compare'/></Link>
                </div>

                <div className='d-flex flex-column'>
                    <Link><img src='/images/view.svg' alt='view'/></Link>
                </div>

                <div className='d-flex flex-column'>
                    <Link><img src='/images/add-cart.svg' alt=''/></Link>
                </div>


            </div>
        </Link>
    </div>
    


<div 
    className={`${location.pathname = "/store" ? `gr-${grid}` : "col-3"}`}>
        <div className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transparent'><img src='/images/wish.svg' alt='wishlist'/></button>
            </div>
            <div className='product-image'>
                <img src='/images/watch.jpg' className='img-fluid' alt='product image'/>
                <img src='/images/watch01.jpg' className='img-fluid' alt='product image'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Amazfit</h6>
                <h5 className='product-title'>
                    description and specifications
                </h5>
                <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />
  <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>give title name mark and more specification and description of your product to atract customer to buy</p>
                <p className='price'>100.00 DZD</p>
            </div>
            <div className='action-bar position-absolute'>

                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'><img src='/images/prodcompare.svg' alt='compare'/></button>
                </div>

                <div className='d-flex flex-column'>
                    <button className='border-0 bg-transparent'><img src='/images/view.svg' alt='view'/></button>
                </div>

                <div className='d-flex flex-column'>
                    <button className='border-0 bg-transparent'><img src='/images/add-cart.svg' alt=''/></button>
                </div>


            </div>
        </div>
    </div>


    
    </>
  )
}

export default ProductCard