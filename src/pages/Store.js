import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';


const Store = () => {
    const [grid, setGrid] = useState(4);
        
    
  return (
    <>
     <Meta title={"Store"}/>
    <BreadCrumb title='Store'/>
    
    <div className='store-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='d-flex gap-10'>
            <div className='col-3'>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Shop By Categories
                    </h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Smartphones</li>
                            <li>Laptop</li>
                            <li>Watch</li>
                            <li>Headphone</li>
                        </ul>
                    </div>
                </div>

                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Filter By
                    </h3>
                    <div>
                        <h5 className='sub-title'>Availability</h5>
                        <div>
                        
                        <div className='form.check'>
                            <input className='form-check-input' type='checkbox' value='' id=''/>
                            <label className='form-check-label' htmlfor=''>
                                  In stock (1)
                                </label>  
                        </div>
                        <div className='form.check'>
                            <input className='form-check-input' type='checkbox' value='' id=''/>
                            <label className='form-check-label' htmlfor=''>
                                  Out of stock (0)
                                </label>  
                        </div>
                        </div>
                        <h5 className='sub-title'>Price DZD</h5>
                        <div className='d-flex align-items-center gap-10'>
                        <div className="form-floating ">
                        <input type="email" className="form-control" style={{"height":"30px"}} id="floatingInput" placeholder="From"/>
                        <label htmlfor="floatingInput">From</label>
                         </div>

                         <div className="form-floating ">
                        <input type="email" className="form-control" style={{"height":"30px"}} id="floatingInput1" placeholder="To"/>
                        <label htmlfor="floatingInput1">To</label>
                         </div>


                        </div>
                        <h5 className='sub-title'>Color</h5>
                        <div>                            
                                <Color/>
                            </div>
                            <h5 className='sub-title'>Size</h5>
                            <div>
                            <div className='form.check'>
                            <input className='form-check-input' type='checkbox' value='' id='color-1'/>
                            <label className='form-check-label' htmlfor='color-1'>
                                  S (1)
                                </label>  
                                </div>
                                <div className='form.check'>
                            <input className='form-check-input' type='checkbox' value='' id='color-2'/>
                            <label className='form-check-label' htmlfor='color-2'>
                                  M (2)
                                </label>  
                                </div>
                        </div>

                        </div>
                    </div>
               

                <div className='filter-card mb-3'>
                    <h3 className='filter-title'> Product Tags</h3>
                    <div>
                        <div className='product-tags d-flex flex-wrap qlign-items-center gap-10'>
                            <span className='badge text-secondary  bg-light rounded-3 py-2 px-3'>Smartphones
                            </span>
                            <span className='badge text-secondary  bg-light rounded-3 py-2 px-3'>Laptop
                            </span>
                            <span className='badge text-secondary  bg-light rounded-3 py-2 px-3'>Watch
                            </span>
                            <span className='badge text-secondary  bg-light rounded-3 py-2 px-3'>Headphone
                            </span>
                            <span className='badge text-secondary  bg-light rounded-3 py-2 px-3'>Printer
                            </span>
                        </div>
                    </div>
                </div>

                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Random Products</h3>
                    <div>
                        <div className='random-product mb-3 d-flex'>
                            <div className='w-50'>
                                <img src='/images/watch.jpg' className='img-fluid' alt='watch'/>
                            </div>
                            <div className='w-50'>
                                <h5>title and description of product</h5>
                                <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />
                                <b>100.00 DZD</b>
                            </div>
                            
                        </div>
                        <div className='random-product d-flex'>
                            <div className='w-50'>
                                <img src='/images/watch.jpg' className='img-fluid' alt='watch'/>
                            </div>
                            <div className='w-50'>
                                <h5>title and description of product</h5>
                                <ReactStars
    count={5}
    size={24}
    value="3"
    edit={false}
    activeColor="#ffd700"
  />
                                <b>100.00 DZD</b>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{'width':'100px'}}>Sort By</p>
                    <select name='' className='form-control form-select' id=''>
                        <option value='manual'>Featured</option>
                        <option value='best-selling' selected='selected'>Best Selling</option>
                        <option value='title-ascending'>A - Z</option>
                        <option value='title-descending'>Z - A</option>
                        <option value='price-ascending'>Price Low to Hight</option>
                        <option value='price-descending'>Price Hight to Low</option>
                    </select>
                    </div>
                    <div className='d-flex align-items-center gap-10 '>
                        <p className='total-product mb-0'>21 Products</p>
                        <div className='d-flex gap-10 align-items-center grid'>
                            <img onClick={() => {setGrid(4);}} src='/images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                            <img onClick={() => {setGrid(3);}} src='/images/gr3.svg' className='d-block img-fluid' alt='grid'/>
                            <img onClick={() => {setGrid(6);}} src='/images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                            <img onClick={() => {setGrid(12);}} src='/images/gr.svg' className='d-block img-fluid' alt='grid'/>
                        </div>
                    </div>
                </div>
                </div>
                <div className='products-list pb-5'>
                     <div className='d-flex flex-wrap gap-10'>
                        <ProductCard grid={grid} />
                     </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Store