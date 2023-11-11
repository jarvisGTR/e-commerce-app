import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from '../images/watch.png'
import {BsTrash} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Cart = () => {
  return (
    <>
    
    <Meta title={"Cart"}/>
    <BreadCrumb title='Cart'/>
    <section className='cart-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
              <h4 className='cart-col-1'>Product</h4>
              <h4 className='cart-col-2'>price</h4>
              <h4 className='cart-col-3'>quantity</h4>
              <h4 className='cart-col-4'>Total</h4>

            </div>

            <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
            <div className='cart-col-1 gap-15 d-flex align-items-center'>
              <div className='w-25'><img src={watch} className='img-fluid' alt='product image'/></div>

              <div className='w-75'>
                <h5 className='title'>name of product</h5>
                <p className='color'>Color</p>
                <p className='size'>Size</p>
              </div>

            </div>
            <div className='cart-col-2'>
              <h5>100. 00 DZD</h5>
            </div>
            <div className='cart-col-3 d-flex align-items-center gap-15'>
              <div><input className='form-control' type='number' name='' min={1} max={10} id=''/></div>
              <div><BsTrash className='text-danger'/></div>
            </div>
            <div className='cart-col-4'>
            <h5>100. 00 DZD</h5>
            </div>

            </div>

            <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
            <div className='cart-col-1 gap-15 d-flex align-items-center'>
              <div className='w-25'><img src={watch} className='img-fluid' alt='product image'/></div>

              <div className='w-75'>
                <h5 className='title'>name of product</h5>
                <p className='color'>Color</p>
                <p className='size'>Size</p>
              </div>

            </div>
            <div className='cart-col-2'>
              <h5>100. 00 DZD</h5>
            </div>
            <div className='cart-col-3 d-flex align-items-center gap-15'>
              <div><input className='form-control' type='number' name='' min={1} max={10} id=''/></div>
              <div><BsTrash className='text-danger'/></div>
            </div>
            <div className='cart-col-4'>
            <h5>100. 00 DZD</h5>
            </div>

            </div>

            <div className='col-12 py-2 mt-4'>
             <div className='d-flex justify-content-between align-items-baseline'>
             <Link to='/Product' className='button'>Continue Shppoing</Link>
             <div className='d-flex flex-column align-items-end'>
              <h4>Subtotal: 100.00 DZD</h4>
              <p>Taxe and shiiping calculate in process</p>
              <Link to='/Checkout' className='button'>Checkout</Link>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    
    </>
  )
}

export default Cart