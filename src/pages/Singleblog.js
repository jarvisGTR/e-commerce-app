import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi'




const Singleblog = () => {
  return (
    <>
     <Meta title={"Dynamic Blog Name"}/>
    <BreadCrumb title='Dynamic Blog Name'/>
    <div className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Categories
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

                </div>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                        <div className='single-blog-card'>
                        <Link to='/Blog' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-5'/>Go Back To Blogs</Link>
                        <h3 className='title'> Title Blog</h3>
                        <img src='/images/blog01.png' alt=''/>
                        <p>FMTELECOM Store est un des meilleurs Boutique pour des Smartphones et des accessoires  à Skikda depuis sa création en 2000. Nous fournissons à nos clients une assistance professionnelle et une livraison  fiable jusqu'à votre porte. Nous cherchons toujours des moyens d'améliorer notre activité et de stimuler la satisfaction de nos clients en fournissant uniquement des produits de haute qualité. </p>
                        
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

export default Singleblog