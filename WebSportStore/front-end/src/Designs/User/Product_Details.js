import React, { useState, useEffect, useRef } from 'react'
import Header from '../../Components/Pages/header_1'
import Footer from '../../Components/Pages/footer'
import HeroSection from '../../Components/Hero_Section/hero_section_product'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Product_Details = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(amount)
  }

    useEffect(() => {
        getData();
      }, [id]);

    // Get data API
    const getData = async () => {
        await axios.get(`http://localhost:5050/api/Product/${id}`)
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
        <div className='bg-gray-100 dark:bg-gray-300 py-8'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {product.map(p => {
            return (
            <>
              <div className='flex flex-col md:flex-row -mx-4'>
                <div className='md:flex-1 px-4'>
                  <div className='h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4'>
                    <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + `/Images/Product/${p.productImage}`} alt='Product Image'/>
                  </div>
                </div>
                <div className='md:flex-1 px-4'>
                  <h1 className='text-2xl font-bold text-gray-800 mb-2'>{p.productName}</h1>
                  <p className='text-gray-600'><span className='font-bold text-black'>Thể loại: </span>{p.categoryName}</p>
                  <div className='flex mb-4'>
                    <div className='mr-4 mt-8'>
                      <span className='font-bold text-black'>Giá: </span>
                      <div className='flex items-center'>
                        <p className='text-black'>{formatMoney(p.productPrice)}</p>
                        <del>
                          <p className='text-sm text-gray-600 cursor-auto ml-2'>{formatMoney(1000000)}</p>
                        </del>
                      </div>
                    </div>                  
                  </div>
                <div>
                  <span className='font-bold text-black'>Mô tả sản phẩm:</span>
                    <p className='text-gray-600 text-sm mt-2'>
                    {p.productDescription}
                  </p>
                </div>
                <div className='flex mt-6'>
                  <div className='mr-4'>
                    <span className='font-bold text-black'>Số lượng: </span>
                    <td className='py-4'>
                        <div className='flex items-center'>
                          <button className='border rounded-md py-2 px-4 mr-2'>-</button>
                          <span className='text-center w-8'>1</span>
                          <button className='border rounded-md py-2 px-4 mr-2'>+</button>
                        </div>
                    </td>                   
                  </div>                                   
                </div>
                <a href='https://google.com' className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 '>
                  <svg xmlns='http://www.w3.org/2000/svg' className='mr-2 h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' 
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                  Thêm vào giỏ hàng
                </a>              
              </div>
            </div>
            </>
            )
          })}            
          </div>
        </div>

        {/* Sản phẩm tương tự */}
        <section className='py-20'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center'>
              Sản phẩm tương tự
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              <a href='#' className='mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500'>
                <div>
                  <img src='https://pagedone.io/asset/uploads/1700726158.png' alt='abc' className='w-full aspect-square'/>                 
                </div>               
                <div className='mt-6'>
                  <div className='flex items-center justify-between'>
                    <h5 className='font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600'>
                      Áo đấu
                    </h5>
                    <span className='py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7'>
                      GIẢM GIÁ
                    </span>                    
                  </div>
                  <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black cursor-auto my-3'>100.000đ</p>
                    <del>
                      <p className='text-sm text-gray-600 cursor-auto ml-2'>120.000đ</p>
                    </del>
                  </div>
                </div>
              </a>

              <a href='#' className='mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500'>
                <div>
                  <img src='https://pagedone.io/asset/uploads/1700726158.png' alt='abc' className='w-full aspect-square'/>
                </div>
                <div className='mt-6'>
                  <div className='flex items-center justify-between'>
                    <h5 className='font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600'>
                      Áo đấu
                    </h5>                    
                  </div>
                  <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black cursor-auto my-3'>100.000đ</p>
                    <del>
                      <p className='text-sm text-gray-600 cursor-auto ml-2'>120.000đ</p>
                    </del>
                  </div>
                </div>
              </a>

              <a href='#' className='mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500'>
                <div>
                  <img src='https://pagedone.io/asset/uploads/1700726158.png' alt='abc' className='w-full aspect-square'/>
                </div>
                <div className='mt-6'>
                  <div className='flex items-center justify-between'>
                    <h5 className='font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600'>
                      Áo đấu
                    </h5>                    
                  </div>
                  <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black cursor-auto my-3'>100.000đ</p>
                    <del>
                      <p className='text-sm text-gray-600 cursor-auto ml-2'>120.000đ</p>
                    </del>
                  </div>
                </div>
              </a>

              <a href='#' className='mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500'>
                <div>
                  <img src='https://pagedone.io/asset/uploads/1700726158.png' alt='abc' className='w-full aspect-square'/>
                </div>
                <div className='mt-6'>
                  <div className='flex items-center justify-between'>
                    <h5 className='font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600'>
                      Áo đấu
                    </h5>                    
                  </div>
                  <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black cursor-auto my-3'>100.000đ</p>
                    <del>
                      <p className='text-sm text-gray-600 cursor-auto ml-2'>120.000đ</p>
                    </del>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
    <Footer />
    </>    
  )
}

export default Product_Details