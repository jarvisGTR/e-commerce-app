import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
    <>
   <header className='header-top-strip py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <p className='text-white mb-0'>
            Welcome to FM TELECOM STORE
            </p>
        </div>
        <div className='col-6'>
          <p className='text-end text-white'>
            SKIKDA-ALGERIA : <a href='Mobile +213 783222214'>+213 783222214</a>
            </p>
        </div>

        
      </div>
    </div>

   </header>
   <header className='header-upper py-3'>
    <div className='container-xxl'>
      <div className='row align-items-center'>
        <div className='col-2'>
          <h2>
            <Link className='text-white'>FMTELECOM</Link>
            </h2>
        </div>
        <div className='col-5'>
        <div class="input-group">
  <input 
  type="text" 
  class="form-control py-2" 
  placeholder="Search Product ..." 
  aria-label="Search Product ..." 
  aria-describedby="basic-addon2"/>
  <span class="input-group-text p-3" id="basic-addon2"><BsSearch /></span>
</div>
        </div>
        <div className='col-5'>
          <div className='header-upper-links d-flex align-items-center justify-content-between'>
            <div>
             <Link to='/CompareProduct' className='d-flex align-items-center gap-10 text-white'>
             <img src='/images/compare.svg' alt='compare'/>
             <p className='mb-0'>Compare <br/> Products</p>

             </Link>
            </div>
            <div>
            <Link to='/Wishlist' className='d-flex align-items-center gap-10 text-white'>
            <img src='/images/wishlist.svg' alt='wishlist'/>
            <p className='mb-0'>Favorite <br/> wishlist</p>

            </Link>
            </div>
            <div>
            <Link to='/Login' className='d-flex align-items-center gap-10 text-white'>
            <img src='/images/user.svg' alt='user'/>
            <p className='mb-0'>Login <br/> My Account</p>

            </Link>
            </div>
            <div>
            <Link to='/Cart' className='d-flex align-items-center gap-10 text-white'>
            <img src='/images/cart.svg' alt='cart'/>
            <div className='d-flex flex-column gap-10'>
              <span className=' badge bg-white text-dark'>0</span>
              <p className='mb-0'>2000 DZD</p>


            </div>

            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </header>

   <header className='header-bottom py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='menu-bottom d-flex align-items-center gap-30'>
            <div>
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle gap-15  d-flex align-items-center" 
  type="button" id="dropdownMenuButton1" 
  data-bs-toggle="dropdown" 
  aria-expanded="false">
    <img src='/images/menu.svg' alt=''/> <span className='me-5 d-inline-block'>CATEGORIES</span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white" to="">Action</Link></li>
    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
  </ul>
</div>
            </div>
            <div className='menu-links'>
              <div className='d-flex align-items-center gap-15'>
                <NavLink  to="/">Home</NavLink>
                <NavLink  to="/product">Store</NavLink>
                <NavLink  to="/Contact">Contact</NavLink>
                <NavLink  to="/Blog">Blogs</NavLink>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

   </header>
    </>
  )
}

export default Header