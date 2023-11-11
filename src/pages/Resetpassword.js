import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset Password"}/>
    <BreadCrumb title='Reset Password'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='log-card'>
                    <h3 className='text-center'>Reset Password</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                      
                    <div>
                            <input type='password' name='password' placeholder='Password' className='form-control'/>
                        </div>
                        <div>
                            <input type='password' name='copassword' placeholder='Comfirme Password' className='form-control'/>
                        </div>
                        <div>
                            
                            <div className='mt-3 d-flex justify-content-center gap-10 align-items-center'>
                                <button className='button border-0'>Reset</button>
                                
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

export default Resetpassword