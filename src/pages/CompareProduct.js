import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color';

const CompareProduct = () => {
  return (
    <>
     <Meta title={"Compare Products"}/>
    <BreadCrumb title='Compare products'/>

    <div className='compare-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                        <div className='product-card-image'>
                            <img src='/images/watch01.jpg' alt='watch'/>
                        </div>
                        <div className='compare-product-detail'>
                            <h5 className='title'>type & brand & name </h5>
                            <h6 className='price mb-3 mt-3'>100.00 DZD</h6>
                            <div>
                                <div className='product-detail'>
                                    <h5>Screen&Resolution:</h5>
                                    <p>6.5" 1280x1024</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Camera:</h5>
                                    <p>50MP 4320p</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Video:</h5>
                                    <p>1080p/4K 30/60/120fps</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>RAM&ROM:</h5>
                                    <p>8gb 128gb</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Processor:</h5>
                                    <p>Snapdragon 800</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Battery:</h5>
                                    <p>5000mAh Fast charge</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Color:</h5>
                                    <Color/>                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                        <div className='product-card-image'>
                            <img src='/images/watch01.jpg' alt='watch'/>
                        </div>
                        <div className='compare-product-detail'>
                            <h5 className='title'>type & brand & name </h5>
                            <h6 className='price mb-3 mt-3'>100.00 DZD</h6>
                            <div>
                                <div className='product-detail'>
                                    <h5>Screen&Resolution:</h5>
                                    <p>6.5" 1280x1024</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Camera:</h5>
                                    <p>50MP 4320p</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Video:</h5>
                                    <p>1080p/4K 30/60/120fps</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>RAM&ROM:</h5>
                                    <p>8gb 128gb</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Processor:</h5>
                                    <p>Snapdragon 800</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Battery:</h5>
                                    <p>5000mAh Fast charge</p>                        
                                </div>
                                <div className='product-detail'>
                                    <h5>Color:</h5>
                                    <Color/>                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default CompareProduct