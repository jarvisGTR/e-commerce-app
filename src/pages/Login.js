import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Meta title={"Login"}/>
    <BreadCrumb title='Login'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='log-card'>
                    <h3 className='text-center'>Login</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div>
                            <input type='email' name='email' placeholder='E-mail' className='form-control'/>
                        </div>
                        <div>
                            <input type='password' name='password' placeholder='Password' className='form-control'/>
                        </div>
                        <div>
                            <Link to='/forgotpassword'>Forgot your Password ?</Link>
                            <div className='mt-3 d-flex justify-content-center gap-10 align-items-center'>
                                <button className='button border-0'>Login</button>
                                <Link to='/Signup' className='button sign up'>Sign Up</Link>
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

export default Login