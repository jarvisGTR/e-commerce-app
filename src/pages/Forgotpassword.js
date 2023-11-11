import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Forgotpassword = () => {
  return (
    <>
    <Meta title={"Forgot Password"}/>
    <BreadCrumb title='Forgot Password'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='log-card'>
                    <h3 className='text-center'>Reset Your Password</h3>
                    <p className='text-center my-2'>we will send email to reset password </p>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div>
                            <input type='email' name='email' placeholder='E-mail' className='form-control'/>
                        </div>
                        
                        <div>
                            
                            <div className='mt-3 d-flex justify-content-center flex-column gap-10 align-items-center'>
                                
                            <button className='button border-0' type='submit'>Login</button>
                                <Link to='/Login'>Cancel</Link>
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

export default Forgotpassword