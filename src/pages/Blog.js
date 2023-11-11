import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import BlocCard from '../components/BlocCard'

const Blog = () => {
  return (
    <>
     <Meta title={"Blog"}/>
    <BreadCrumb title='Blog'/>
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
                        <BlocCard/>
                        </div>
                        <div className='col-6 mb-3'>
                        <BlocCard/>
                        </div>
                        <div className='col-6 mb-3'>
                        <BlocCard/>
                        </div>
                        <div className='col-6 mb-3'>
                        <BlocCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog