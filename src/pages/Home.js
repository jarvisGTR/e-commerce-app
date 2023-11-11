import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlocCard from '../components/BlocCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import {services} from '../utils/Data';

const Home = () => {
  return (
    <>
    <Container class1='home-wrapper-1 py-5'>  
    <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
                <img 
                src='/images/banner01.png' 
                className='img-fluid rounded-3' 
                alt='main banner'/>
                <div className='main-banner-content position-absolute'>
                  <h4>title of product</h4>
                  <h5>name of product</h5>
                  <p>price of product</p>
                  <Link className=' button'>more detail</Link>
                </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner position-relative '>
                <img 
                src='/images/bnn1.png' 
                className='img-fluid rounded-3' 
                alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>title of product</h4>
                  <h5>name of product</h5>
                  <p>price of product<br/>description</p>
                </div>
            </div>
            <div className='small-banner position-relative '>
                <img 
                src='/images/catbanner-02.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>title of product</h4>
                  <h5>name of product</h5>
                  <p>price of product<br/>description</p>
                </div>
            </div>
            <div className='small-banner position-relative '>
                <img 
                src='/images/catbanner-03.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>title of product</h4>
                  <h5>name of product</h5>
                  <p>price of product<br/>description</p>
                </div>
            </div>
            <div className='small-banner position-relative '>
                <img 
                src='/images/catbanner-04.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>title of product</h4>
                  <h5>name of product</h5>
                  <p>price of product<br/>description</p>
                </div>
            </div>
            </div>
          </div>
        </div>
    </Container>

    <Container class1='home-wrapper-2 py5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
                {
                services?.map((i,j)=>{
                  return(
                    <div className='d-flex align-items-center gap-15'key={j}>
                    <img src={i.image} alt='services' />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-6'>{i.tagline}</p>
                      </div> 
                  </div>
            
              )})}
            </div>
          </div>
        </div>
      
    </Container>
    


  


   
    
          



    <section className='home-wrapper-3 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <div className='categories d-flex justify-content-between flex-wrap align-items-center bg-white'>
            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Smartphones</h6>
                <p>10 products</p>
              </div>
              <img src='/images/phone.png' alt='phones'/>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Laptop</h6>
                <p>10 products</p>
              </div>
              <img src='/images/laptop.jpg' alt='phones'/>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>watch</h6>
                <p>10 products</p>
              </div>
              <img src='/images/watch.png' alt='phones'/>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>haedphone</h6>
                <p>10 products</p>
              </div>
              <img src='/images/headphone.jpg' alt='phones'/>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Smartphones</h6>
                <p>10 products</p>
              </div>
              <img src='/images/phone.png' alt='phones'/>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>Laptop</h6>
                <p>10 products</p>
              </div>
              <img src='/images/laptop.jpg' alt='phones'/>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>watch</h6>
                <p>10 products</p>
              </div>
              <img src='/images/watch.png' alt='phones'/>
            </div>

            <div className='d-flex gap-30 align-items-center'>
              <div>
                <h6>haedphone</h6>
                <p>10 products</p>
              </div>
              <img src='/images/headphone.jpg' alt='phones'/>
            </div>



            </div>
          </div>
        </div>
      </div>
    </section>


    <section className='famous-wrapper py-5 home-wrapper-2'>
       <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/famous01.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5>New Arrival</h5>
              <h6>Name of new produt</h6>
              <p>description title</p>
              </div>            
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/famous02.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>New Arrival</h5>
              <h6 className='text-dark'>Name of new produt</h6>
              <p className='text-dark'>description title</p>
              </div>            
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/famous02.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>New Arrival</h5>
              <h6 className='text-dark'>Name of new produt</h6>
              <p className='text-dark'>description title</p>
              </div>            
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/famous02.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>New Arrival</h5>
              <h6 className='text-dark'>Name of new produt</h6>
              <p className='text-dark'>description title</p>
              </div>            
            </div>
          </div>


        </div>
       </div>
    </section>




    <section className='feature-wrapper py-5 home-wrapper-2'>
     <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Featured Products</h3>
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
     </div>
    </section>

    <section className='famous-wrapper py-5 home-wrapper-2'>
       <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/famous01.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5>New Arrival</h5>
              <h6>Name of new produt</h6>
              <p>description title</p>
              </div>            
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/famous02.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>New Arrival</h5>
              <h6 className='text-dark'>Name of new produt</h6>
              <p className='text-dark'>description title</p>
              </div>            
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/famous02.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>New Arrival</h5>
              <h6 className='text-dark'>Name of new produt</h6>
              <p className='text-dark'>description title</p>
              </div>            
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/famous02.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>New Arrival</h5>
              <h6 className='text-dark'>Name of new produt</h6>
              <p className='text-dark'>description title</p>
              </div>            
            </div>
          </div>


        </div>
       </div>
    </section>

    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Product</h3>
          </div>
        </div>
        <div className='row'>
          
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          
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

    <section className='marque-wrapper home-wrapper-2 py-5'>
<div className='container-xxl'>
  <div className='row'>
    <div className='col-12'>
      <div className='marquee-inner-wrapper card-wrapper'>
      <Marquee className='d-flex'>
        <div className='mx-4 w-25'>
          <img src='/images/brand-01.png' alt='brand'/>
        </div>

        <div className='mx-4 w-25'>
          <img src='/images/brand-02.png' alt='brand'/>
        </div>

        <div className='mx-4 w-25'>
          <img src='/images/brand-03.png' alt='brand'/>
        </div>

        <div className='mx-4 w-25'>
          <img src='/images/brand-04.png' alt='brand'/>
        </div>

        <div className='mx-4 w-25'>
          <img src='/images/brand-05.png' alt='brand'/>
        </div>

        <div className='mx-4 w-25'>
          <img src='/images/brand-06.png' alt='brand'/>
        </div>

        <div className='mx-4 w-25'>
          <img src='/images/brand-07.png' alt='brand'/>
        </div>

        <div className='mx-4 w-25'>
          <img src='/images/brand-08.png' alt='brand'/>
        </div>

        <div className='mx-4 w-25'>
          <img src='/images/brand-09.png' alt='brand'/>
        </div>
   
     </Marquee>
      </div>
    </div>
  </div>
</div>
    </section>

    <section className='blog-wrapper py-5 home-wrapper-2'>
     <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our New Blogs</h3>
          </div>
        
        
      </div>
      <div className='row'>
        <div className='col-3'>
        <BlocCard/>
        </div>
        <div className='col-3'>
        <BlocCard/>
        </div>
        <div className='col-3'>
        <BlocCard/>
        </div>
        <div className='col-3'>
        <BlocCard/>
        </div>
      </div>
     </div>
    </section>

    </>
  )
}

export default Home