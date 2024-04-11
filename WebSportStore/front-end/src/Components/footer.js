import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-white'>
        <footer className='relative px-3 pb-7 pt-8'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap text-center lg:text-left'>
                    {/* Thông tin shop */}
                    <div className='w-full px-4 lg:w-6/12'>
                        <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-4'>
                            SHOP BÁN HÀNG
                        </h4>
                        <p className='block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-500 lg:w-2/5'>
                            Easy to use React components for Tailwind CSS and Material Design.
                        </p>
                        <div className='mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start'>
                            <a href='https://www.facebook.com/hoanglam7996/' target='_blank'>
                                <button className='bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                                    <svg className='w-5 h-5 fill-current' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' /></svg>
                                </button>
                            </a>
                            <a href='https://www.youtube.com/channel/UCGxnj0_ou7UuxqEehYBDQkg' target='_blank'>
                                <button className='bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                                    <svg className='w-5 h-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' /></svg>
                                </button>
                            </a>
                            <a href='https://www.instagram.com/hoanglam790/' target='_blank'>
                                <button className='bg-pink-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded'>
                                    <svg className='w-5 h-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' /></svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* Link liên kết */}
                    <div className='mx-2 mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0'>
                        <div>
                            <p className='antialiased font-sans text-sm leading-normal text-blue-gray-900 mb-2 block font-medium uppercase'>
                                Liên kết
                            </p>
                            <ul className='mt-3'>
                                <li className='mb-2 block font-normal text-blue-gray-500 hover:text-red-600'> 
                                    <Link to='/contact' >Về chúng tôi</Link>
                                </li>
                                <li>
                                    <a href='https://www.creative-tim.com/presentation' target='_blank' rel='noreferrer' className='mb-2 block font-normal text-blue-gray-500 hover:text-red-600'>Sản phẩm</a>
                                </li>
                                <li>
                                    <a href='https://www.creative-tim.com/presentation' target='_blank' rel='noreferrer' className='mb-2 block font-normal text-blue-gray-500 hover:text-red-600'>Tin tức</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mx-2 mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0'>
                        <div>
                            <p className='antialiased font-sans text-sm leading-normal text-blue-gray-900 mb-2 block font-medium uppercase'>
                                Về chúng tôi
                            </p>
                            <ul className='mt-3'>
                                <li className='mb-2 block font-normal text-blue-gray-500 hover:text-red-600'> 
                                    <Link to='/contact' >Giới thiệu</Link>
                                </li>
                                <li>
                                    <a href='https://www.creative-tim.com/presentation' target='_blank' rel='noreferrer' className='mb-2 block font-normal text-blue-gray-500 hover:text-red-600'>Sản phẩm</a>
                                </li>
                                <li>
                                    <a href='https://www.creative-tim.com/presentation' target='_blank' rel='noreferrer' className='mb-2 block font-normal text-blue-gray-500 hover:text-red-600'>Tin tức</a>
                                </li>
                            </ul>
                        </div>
                    </div>                 
                </div>
            </div>
            {/* Đường kẻ */}
            <hr className='my-6 border-gray-300'></hr>
            {/* Thông tin về trang web */}
            <div className='flex flex-wrap items-center justify-center md:justify-between'>
                <div className='mx-auto w-full px-4 text-center'>
                    <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500'>
                        Bản quyền © 2024 thuộc về Shop bán hàng bởi Hoàng Lâm.
                    </p>
                </div>
            </div>
        </footer>
    </div>
  )
}
export default Footer