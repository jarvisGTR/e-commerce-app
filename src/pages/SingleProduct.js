import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { Link } from 'react-router-dom'
import {BsShuffle} from 'react-icons/bs'
import {GrFavorite} from 'react-icons/gr'

const SingleProduct = () => {
  
    const props = {width: 400, height: 600, zoomWidth: 600, img: "/images/sp1.jpg"};
  return (
   <>
   <Meta title={"Product Name"}/>
    <BreadCrumb title='Product Name'/>
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>

                    <div>
                    <ReactImageZoom {...props} />
                    </div>
                </div>
                <div className='other-product-image d-flex flex-wrap gap-15'>
                  <div><img src='/images/sp1.png' className='img-fluid' alt=''/></div>
                  <div><img src='/images/sp1.png' className='img-fluid' alt=''/></div>
                  <div><img src='/images/sp1.png' className='img-fluid' alt=''/></div>
                  <div><img src='/images/sp1.png' className='img-fluid' alt=''/></div>

                </div>
                </div>

                <div className='col-6'>
                  <div className='main-product-detail'>
                    <div className='border-bottom'>
                      <h3>Type brand name of product</h3>
                    </div>

                    <div className='border-bottom py-3'>
                      <p className='price'>100.00 DZD</p>
                    </div>

                    <div className='border-bottom '>
                      <div className='d-flex gap-10 align-items-center'>
                        <h3 className='product-heading'>Screen & Resolution :</h3> <p className='product-data'>detail</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center'>
                        <h3 className='product-heading'>Camera & Video :</h3> <p className='product-data'>detail</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center'>
                        <h3 className='product-heading'>RAM & ROM :</h3> <p className='product-data'>detail</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center'>
                        <h3 className='product-heading'>Processor :</h3> <p className='product-data'>detail</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center'>
                        <h3 className='product-heading'>Battery:</h3> <p className='product-data'>detail</p>
                      </div>
                    </div>

                    <div className='border-bottom py-3 '>
                      <div className='d-flex gap-10 flex-column'>
                        <h3 className='product-heading'>Color :</h3> 
                        <Color/>
                      </div>
                      <div className='d-flex gap-10 align-items-center'>
                        <h3 className='product-heading'>Quantity :</h3> 
                      <div className=''><input type='number' name='' className='form-control'
                      min={1} max={10} style={{width:'80px'}} id=''/> </div>
                      <div className='d-flex align-items-center gap-30 ms-4'>
                        <Link to='/Cart' className='button border-0'>Add To Cart</Link>
                        <Link className='button border-0'>Buy Now</Link>
                        </div>
                        

                       
                      </div>
                      <div className='d-flex align-items-center gap-15'>
                          <div>
                            <a href=''><BsShuffle className='fs-5 me-2'/>Add To Compare</a>
                          </div>
                          <div>
                            <a href=''><GrFavorite className='fs-5 me-2'/>Add To Wishlist</a>
                          </div>
                        </div>

                        <div className='d-flex gap-10 flex-column my-3'>
                        <h3 className='product-heading'>shippin and returns :</h3> 
                        <p className='product-data'>free shipping to wilaya skikda 
                        <br/>in 24 hours<b>safty and fast</b></p>
                      </div>

                    
                   
               
                    </div>

                  </div>
                </div>

            </div>
        </div>
    </div>

    <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='bg-white p-3'>
                    <h4>Description</h4>
                    <p>
                    FMTELECOM Store est un des meilleurs Boutique pour des Smartphones et des accessoires  à Skikda depuis sa création en 2000. Nous fournissons à nos clients une assistance professionnelle et une livraison  fiable jusqu'à votre porte. Nous cherchons toujours des moyens d'améliorer notre activité et de stimuler la satisfaction de nos clients en fournissant uniquement des produits de haute qualité.
                    </p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>

    <section className='review-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>

                </div>
            </div>
        </div>
    </section>

    <section className='popular-wrapper py-5 home-wrapper-2'>
     <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Popular Products</h3>
          </div>            
      </div>
      <div className='row'>
      <div className='col-3'>
      <ProductCard/>
        </div>
        <div className='col-3'>
      <ProductCard/>
        </div>
        <div className='col-3'>
      <ProductCard/>
        </div>
        <div className='col-3'>
      <ProductCard/>
        </div>
        
        
      </div>
     </div>
    </section>
   
   </>
  )
}

export default SingleProduct