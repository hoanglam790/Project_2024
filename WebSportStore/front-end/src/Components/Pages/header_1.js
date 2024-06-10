import React, { useState, useEffect, useRef } from 'react'
import Logo from '../../Images/logo.png'
import { Link } from 'react-router-dom'

const Header_1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuTimeout = useRef(null)

  useEffect(() => {
    return () => {
      clearTimeout(menuTimeout.current);
    };
  }, []);

  const handleMenuOpen = () => {
    clearTimeout(menuTimeout.current);
    setIsMenuOpen(true)
  }

  const handleMenuClose = () => {
    menuTimeout.current = setTimeout(() => {
      setIsMenuOpen(false)
    }, 200);
  }

  const handleItemClick = () => {
    clearTimeout(menuTimeout.current);
  }

  const handleListMouseOver = () => {
    clearTimeout(menuTimeout.current);
  }

  return (
    <><div className='header_top'>
        <div className='container'>
          <div className='row'>
            <div className='col-span-10 mx-2 my-2 text-right'>
              <p className='hotline'>
              <span className='inline-block font-bold'>Hotline: 0912567790</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-1 border-gray-400'></hr>
      <div className='container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4'>
        <nav className='block w-full max-w-screen-2xl rounded-xl bg-transparent text-white shadow-none p-3'>
          <div className='container mx-auto flex items-center justify-between text-black'>
            <a href='#'>
              <img className='object-contain h-20 w-40' src={Logo} alt='logo_shop' />
            </a>
            <div className='hidden lg:block'>
              <ul className='mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-3xl'>
                <li className='block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize'>
                  <Link to='/' className='flex items-center gap-1 p-1 font-bold hover:text-blue-700'>Trang chủ</Link>
                </li>
                <li className='block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize'>
                  <a className='flex items-center gap-1 p-1 font-bold hover:text-blue-700' 
                    onMouseOver={handleMenuOpen}
                    onMouseOut={handleMenuClose}
                  >
                    Danh mục sản phẩm
                  </a>
                  {isMenuOpen && (
                    <div className="absolute bg-gray-800 shadow-lg rounded-md mt-3" onMouseOver={handleListMouseOver}>
                      <a href="https://google.com" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={handleItemClick}>Danh mục 1</a>
                      <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={handleItemClick}>Danh mục 2</a>
                      <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700" onClick={handleItemClick}>Danh mục 3</a>
                      {/* Add more product links as needed */}
                    </div>
                  )}
                </li>
                <li className='block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize'>
                <Link to='/product' className='flex items-center gap-1 p-1 font-bold hover:text-blue-700'>Sản phẩm</Link>
                </li>
                <li className='block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize'>
                  <a className='flex items-center gap-1 p-1 font-bold hover:text-blue-700' href='google.com'>Tin tức</a>
                </li>
                <li className='block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize'>
                <Link to='/contact' className='flex items-center gap-1 p-1 font-bold hover:text-blue-700'>Liên hệ</Link>
                </li>
              </ul>             
            </div>
            <div className='hidden gap-2 lg:flex'>
              <a href='#/' className='hidden lg:flex'>
                <button className='align-middle font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs mx-3 py-2 px-4 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-red-600 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block w-full'>
                  Đăng ký
                </button>                
              </a>
              <a href='/login' className='hidden lg:flex'>
                <button className='align-middle font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-red-600 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block w-full'>
                  Đăng nhập
                </button>
              </a>
              <div className='t-0 absolute right-3'>
                <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>0</p>
              </div>
              <a href='/cart'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </a>           
            </div>            
          </div>          
        </nav>
      </div>
    </>
  )
}
export default Header_1