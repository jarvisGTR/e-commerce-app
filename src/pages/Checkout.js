import React from 'react'
import { Link } from 'react-router-dom'
import {IoArrowBackOutline} from 'react-icons/io5'
import watch from '../images/watch.png'


const Checkout = () => {
  return (
    <>
    
    <div className='checkout-wrapper  home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-7'>
            <h3 className='website-name'>FMTELECOM</h3>
            <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link className='text-dark' to='/Cart'>Cart</Link></li>&nbsp; /
    <li class="breadcrumb-item active" aria-current="page">Information</li>&nbsp; /
    <li class="breadcrumb-item active" aria-current="page">Shipping</li>&nbsp; /
    <li class="breadcrumb-item active" aria-current="page">Payment</li>
  </ol>
          </nav>
          <h4 className='title'>Contact information</h4>
          <p className='user-detail'>Riad gtr (riad@hmail.com)</p>
          <h4 className='mb-3'>Shipping Address</h4>
          <form action='' className='d-flex flex-wrap gap-15 justify-content-between'>
            <div className='w-100'><select name='' className='form-control form-select' id=''>
              <option value='' selected disabled>Select Country</option>
              </select></div>
            <div className='w-100'><select name='' className='form-control form-select' id=''></select></div>
            <div className='flex-grow-1'><input type='text' placeholder='First Name' className='form-control'/></div>
            <div className='flex-grow-1'><input type='text' placeholder='Last Name' className='form-control'/></div>
            <div className='w-100'><input type='text' placeholder='Address' className='form-control'/></div>
            <div className='w-100'><input type='text' placeholder='Apartement suit,etc' className='form-control'/></div>
            <div className='flex-grow-1'><input type='text' placeholder='City' className='form-control'/></div> 
            <div className='flex-grow-1'><select name='' className='form-control form-select' id=''>
            <option value='' selected disabled>Wilaya</option>
              </select></div>
            <div className='flex-grow-1'><input type='text' placeholder='ZIP code' className='form-control'/></div>
           <div className='w-100'>
            <div className='d-flex justify-content-between align-items-center'>
            <Link to='/Cart' className='text-dark'><IoArrowBackOutline className='me-2'/>Return To Cart</Link> 
            <Link to='/Cart' className='button'>Proceed To Shipping</Link> 
            </div>
            
           </div>
          </form>

          </div>
          
          
          
          
          
          <div className='col-5 bg-white'>
            <div className='border-bottom py-4'>
           <div className='d-flex gap-10 align-items-center'>
           <div className='w-75 d-flex gap-10'>
                <div className='w-25 position-relative'>
                  <span className='badge bg-secondary rounded-circle position-absolute'>1</span><img className='img-fluid' src={watch} alt='product'/></div>
                <div>
                  <h5 className='title'>Name of product</h5>
                  <p>detail product</p>
                </div>
              </div>
              <div className='flex-grow-1'>
                <h5 className='pro-price'>1000.00 DZD</h5>
              </div>
              
            </div>
            <div className='d-flex gap-10 align-items-center'>
           <div className='w-75 d-flex gap-10'>
                <div className='w-25 position-relative'>
                  <span className='badge bg-secondary rounded-circle position-absolute'>1</span><img className='img-fluid' src={watch} alt='product'/></div>
                <div>
                  <h5 className='title'>Name of product</h5>
                  <p>detail product</p>
                </div>
              </div>
              <div className='flex-grow-1'>
                <h5 className='pro-price'>1000.00 DZD</h5>
              </div>
              
            </div>
           </div>
            <div className='border-bottom py-4'>
            <div className='d-flex justify-content-between align-items-center'>
              <p>Sub Total :</p>
              <h5>100 DZD</h5>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0'>Shipping :</p>
              <h5 className='mb-0'>10 DZD</h5>
            </div>
            </div>
        
            <div className='d-flex justify-content-between align-items-center'>
              <h4>Total :</h4>
              <h5 className='total-price'>1000.00 DZD</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout