import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <div className='col-4 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='/images/watch.jpg' className='img-fluid' alt=''/>
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Amazfit</h5>
                    <h6 className='title'>smart watch amazfit verge watch</h6>
                    <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />
                 <p className='price'>
                    <span className='red-p'>100DZD </span><strike>200DZD</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5 </b>Days
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>1</span>
                            </div>
                           
                    </div>
                    <div className='prod-count my-3'>
                                <p>Products: 5</p>
                                <div className="progress">
                               <div className="progress-bar" 
                               role="progressbar" 
                               style={{width:"25%"}}
                               aria-valuenow="25" 
                               aria-valuemin="0" a
                               ria-valuemax="100">

                               </div>
                              </div>
                            </div>
                            <Link className='button'>Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct