import React, { useState, useEffect, useRef } from 'react'
import Header from '../../Components/Pages/header_1'
import Footer from '../../Components/Pages/footer'
import HeroSection from '../../Components/Hero_Section/hero_section_product'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductByCate = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getData();
      }, []);

    // Get data API
    const getData = async () => {
        await axios.get(`http://localhost:5050/api/Product`)
        .then((request) => {
            setProduct(request.data.data);
        })
        .catch((error) => {
            console.log(error);
    })
  }


  return (
    <>
    <Header />
    <HeroSection />
        <div className='text-center p-10'>
            <h1 className='font-bold text-4xl mb-4'>Responsive Product card grid</h1>
            <h1 className='text-3xl'>Product</h1>
        </div>
        <section id='Products' className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
            {product.map(p => {
                <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
                    <a href='#'>
                        <img src={process.env.PUBLIC_URL + `/Images/${p?.productImage}`} height={270}
                            alt='Product' className='h-80 w-72 object-cover rounded-t-xl'/>
                        <div className='px-4 py-3 w-72'>                        
                            <p className='text-lg font-bold text-black truncate block capitalize'>{p.productName}</p>
                            <span className='text-gray-400 mr-3 uppercase text-xs'>Brand</span>
                            <div className='flex items-center'>
                                <p className='text-lg font-semibold text-black cursor-auto my-3'>{p.productPrice}</p>
                                <del>
                                    <p className='text-sm text-gray-600 cursor-auto ml-2'>120.000đ</p>
                                </del>
                            </div>
                            <a href='https://google.com' className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='mr-2 h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                                <path strokeLinecap='round' strokeLinejoin='round' 
                                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </a>          
                </div>
            })}
                        
        </section>
    <Footer />
    </>    
  )
}

export default ProductByCate
