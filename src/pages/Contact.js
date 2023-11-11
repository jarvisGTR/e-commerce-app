import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import {FaStoreAlt} from 'react-icons/fa'


const Contact = () => {
  return (
    <>
    <Meta title={"Contact Us"}/>
    <BreadCrumb title='Contact Us'/>
    <div className='contact-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5737862844694!2d7.05332021216262!3d36.90054327210278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1cd71579dea29%3A0x43f8569c351d5c37!2sFM%20TELECOM%201!5e0!3m2!1sfr!2sdz!4v1699341560486!5m2!1sfr!2sdz" 
        width="600" height="450" className="border-0 w-100" allowFullscreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='clo-12 mt-5'>
          <div className='contact-inner-wrapper d-flex justify-content-between'>
            <div>
              <h3 className='contact-title mb-4'>Contact</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' className='form-control' placeholder='Name'/>
                </div>
                <div>
                  <input type='email' className='form-control' placeholder='Email'/>
                </div>
                <div>
                  <input type='tel' className='form-control' placeholder='Mobile Number'/>
                </div>
                <div>
                  <textarea name='' id='' className='w-100 form-control' cols='30' rows='4' placeholder='Comments'></textarea>
                </div>
                <div>
                  <button className='button'>Submit</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-4 d-flex gap-15 align-items-center'><AiTwotoneHome className='fs-5'/>
                  <address className='mb-0'>Filfila SKIKDA-ALGERIA</address></li>
                  <li className='mb-4 d-flex gap-15 align-items-center'><BsFillTelephoneFill className='fs-5'/>
                  <a href='tel:+213 783222214'>Mobile: +213 783222214</a></li>
                  <li className='mb-4 d-flex gap-15 align-items-center'><AiTwotoneMail className='fs-5'/>
                  <a href='mailto:fmtelecom21@gmail.com'>Email: fmtelecom@gmaul.com</a></li>
                  <li className='mb-4 d-flex gap-15 align-items-center'><FaStoreAlt className='fs-5'/>
                  <p className='mb-0'>Saturday - Friday 07:00AM - 09:00PM</p></li>
                </ul>
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

export default Contact