import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


const Signup = () => {
  return (
    <>
    <Meta title={"Sign Up"}/>
    <BreadCrumb title='Sign Up'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='log-card'>
                    <h3 className='text-center'>Welcome</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div>
                            <input type='text' name='name' placeholder='Your Name' className='form-control'/>
                        </div>
                        <div>
                            <input type='email' name='email' placeholder='E-mail' className='form-control'/>
                        </div>
                        <div>
                            <input type='tel' name='phone' placeholder='Phone Number' className='form-control'/>
                        </div>
                        <div>
                            <input type='password' name='password' placeholder='Password' className='form-control'/>
                        </div>
                        <div>
                            
                            <div className='mt-3 d-flex justify-content-center gap-10 align-items-center'>
                                <button className='button border-0'>Create</button>
                                
                            </div>
                        </div>                      
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup