import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTiktok} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
    <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
             <img src='/images/newsletter.png' alt='newslatter'/>
             <h2 className='mb-0 text-white'>Sign Up for newsletter</h2>
             </div>
            </div>
          
          <div className='col-7'>
         
          <div class="input-group">
  <input 
  type="text" 
  class="form-control py-2" 
  placeholder="Your Email Address ..." 
  aria-label="Your Email Address ..." 
  aria-describedby="basic-addon2"/>
  <span class="input-group-text p-3" id="basic-addon2">Subscribe</span>
</div>

          
          
          </div>
        </div>
      </div>
      
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact</h4>
            <div className='footer-links d-flex flex-column '>
              <address className='text-white fs-6'>
                skikda algeria <br/> filfila 
              </address>
              <a href='Tel: 1234567890' className='mt-3 d-block mb-2 text-white'>1234567890</a>
              <a href='mail: test@gmail.com' className='mt-3 d-block mb-2 text-white'>test@gmail.com</a>
              <div className='social-icons d-flex align-items-center gap-30'>
                <a href='/'><BsFacebook className = 'text-white fs-5' /></a>
                <a href='/'><BsInstagram className = 'text-white fs-5' /></a>
                <a href='/'><BsTiktok className = 'text-white fs-5' /></a>
                
              </div>
            </div>
          </div>
          <div className='col-3'>
          <h4 className='text-white mb-4'>service</h4>
          <div className='footer-links d-flex flex-column '>
              <Link className='text-white py-2 nb-1'>repair</Link>
              <Link className='text-white py-2 nb-1'>flash and software</Link>
              <Link className='text-white py-2 nb-1'>shipping</Link>
              <Link className='text-white py-2 nb-1'>sim cards</Link>
            </div>
          </div>
          <div className='col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-links d-flex flex-column '>
              <Link className='text-white py-2 nb-1'>About us</Link>
              <Link className='text-white py-2 nb-1'>faq</Link>
              <Link className='text-white py-2 nb-1'>sign in</Link>
              <Link className='text-white py-2 nb-1'>sign up</Link>
            </div>
          </div>
          <div className='col-2'>
          <h4 className='text-white mb-4'>quick links</h4>
            <div className='footer-links d-flex flex-column '>
              <Link className='text-white py-2 nb-1'>smartphone</Link>
              <Link className='text-white py-2 nb-1'>laptop</Link>
              <Link className='text-white py-2 nb-1'>watch</Link>
              <Link className='text-white py-2 nb-1'>headphone</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}: Powerd by FM</p>
          </div> 
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer