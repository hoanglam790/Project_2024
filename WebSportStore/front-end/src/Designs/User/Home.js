import React from 'react'
import Header from '../../Components/header'
import Footer from '../../Components/footer'
import Ball from '../../Images/ball.png'

const Home = () => {
  return (
    <>
      <Header />
      {/* Thông tin sản phẩm */}
      <div className='container my-24 mx-auto md:px-6'>
        <section className='mb-12 text-center'>
          <div className='container mx-auto'>
            <div className='mx-auto w-full px-4 text-center lg:w-6/12'>
              <p className='font-sans text-xl leading-relaxed text-inherit font-semibold'></p>
              <h2 className='font-sans text-4xl font-bold leading-[2.0] text-blue-gray-900 my-3'>Sản phẩm</h2>
              <p className='font-sans text-xl font-normal leading-[1.7] text-blue-gray-500'>
                According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.
              </p>
            </div>
            <div className='mt-24 grid gap-16 lg:grid-cols-4 xl:gap-x-12'>
            <div className='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center'>
                <img src={Ball} alt='Ball' class='inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25'/>
                <h5 class='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1'>Ball</h5>
                <p class='block antialiased font-sans text-base leading-relaxed font-bold text-gray-500'>100.000 VNĐ</p>
              </div>
              <div className='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center'>
                <img src={Ball} alt='Ball' class='inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25'/>
                <h5 class='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1'>Ball</h5>
                <p class='block antialiased font-sans text-base leading-relaxed font-bold text-gray-500'>100.000 VNĐ</p>
              </div>
              <div className='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center'>
                <img src={Ball} alt='Ball' class='inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25'/>
                <h5 class='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1'>Ball</h5>
                <p class='block antialiased font-sans text-base leading-relaxed font-bold text-gray-500'>100.000 VNĐ</p>
              </div>
              <div className='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center'>
                <img src={Ball} alt='Ball' class='inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25'/>
                <h5 class='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1'>Ball</h5>
                <p class='block antialiased font-sans text-base leading-relaxed font-bold text-gray-500'>100.000 VNĐ</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Tin tức */}
      <div className='container my-48 mx-auto md:px-8'>
        <section className='mb-32 text-center'>
          <h2 className='font-sans text-4xl font-bold leading-[2.0] text-blue-gray-900 my-3'>Tin tức nổi bật</h2>
          <div className='grid gap-16 lg:grid-cols-3 xl:gap-x-12'>
            {/*Bắt đầu tin tức*/}
            <div className='mb-6 lg:mb-0'>
              <div className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'>
                <img src={Ball} className='w-full' alt='Ball' />
                <a href=''>
                  <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]'></div>
                </a>
              </div>
              <h5 className='mb-3 text-lg font-bold'>Tin nóng hổi</h5>
              <div className='mb-3 flex items-center justify-center text-sm font-medium text-gray-500 dark:bg-white'>
                <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 ml-2 mr-1">
                  <path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path>
                </svg>
                Users
                <div className='line-clamp-1 ml-2'>|</div>
                <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16 ml-2 mr-1">
                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" class=""></path>
                </svg>
                23/02/2024
              </div>
              <p className='text-justify'>
				        Bước 1: Băng bảo vệ hình xăm ngay sau khi xăm và tháo băng sau 1 - 2 giờ
                Bước 2: Trong 7 ngày đầu: Luôn rửa sạch hình xăm với xà phòng nhẹ và nước ấm ít nhất 3 lần/ngày. Rửa vào buổi sáng sau khi ngủ dậy
                Tuyệt đối không sử dụng các loại xà phòng có nhiều hóa chất tạo mùi, tạo màu và chứa nhiều sút, axit&nbsp;&nbsp;
			        </p>
              <a href="#" class="flex font-bold text-sm mt-10 ml-2 hover:text-red-500">
                Đọc thêm
                <svg class="fill-current ml-2 mr-2 font-bold w-4 hover:text-red-500" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M363.8 264.5L217 412.5c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L298.7 256 180.2 136.3c-4.7-4.7-4.7-12.3 0-17L200 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17zm-160-17L57 99.5c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L138.7 256 20.2 375.7c-4.7 4.7-4.7 12.3 0 17L40 412.5c4.7 4.7 12.3 4.7 17 0l146.8-148c4.7-4.7 4.7-12.3 0-17z" class=""></path>
                </svg>               
              </a>    
            </div>
            <div className='mb-6 lg:mb-0'>
              <div className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'>
                <img src={Ball} className='w-full' alt='Ball' />
                <a href=''>
                  <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]'></div>
                </a>
              </div>
              <h5 className='mb-3 text-lg font-bold'>Tin nóng hổi</h5>
              <div className='mb-3 flex items-center justify-center text-sm font-medium text-gray-500 dark:bg-white'>
                <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 ml-2 mr-1">
                  <path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path>
                </svg>
                Users
                <div className='line-clamp-1 ml-2'>|</div>
                <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16 ml-2 mr-1">
                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" class=""></path>
                </svg>
                23/02/2024
              </div>
              <p className='text-justify'>
				        Bước 1: Băng bảo vệ hình xăm ngay sau khi xăm và tháo băng sau 1 - 2 giờ
                Bước 2: Trong 7 ngày đầu: Luôn rửa sạch hình xăm với xà phòng nhẹ và nước ấm ít nhất 3 lần/ngày. Rửa vào buổi sáng sau khi ngủ dậy
                Tuyệt đối không sử dụng các loại xà phòng có nhiều hóa chất tạo mùi, tạo màu và chứa nhiều sút, axit&nbsp;&nbsp;
			        </p>
              <a href="#" class="flex font-bold text-sm mt-10 ml-2 hover:text-red-500">
                Đọc thêm
                <svg class="fill-current ml-2 mr-2 font-bold w-4 hover:text-red-500" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M363.8 264.5L217 412.5c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L298.7 256 180.2 136.3c-4.7-4.7-4.7-12.3 0-17L200 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17zm-160-17L57 99.5c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L138.7 256 20.2 375.7c-4.7 4.7-4.7 12.3 0 17L40 412.5c4.7 4.7 12.3 4.7 17 0l146.8-148c4.7-4.7 4.7-12.3 0-17z" class=""></path>
                </svg>               
              </a>    
            </div>
            <div className='mb-6 lg:mb-0'>
              <div className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'>
                <img src={Ball} className='w-full' alt='Ball' />
                <a href=''>
                  <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]'></div>
                </a>
              </div>
              <h5 className='mb-3 text-lg font-bold'>Tin nóng hổi</h5>
              <div className='mb-3 flex items-center justify-center text-sm font-medium text-gray-500 dark:bg-white'>
                <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 ml-2 mr-1">
                  <path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path>
                </svg>
                Users
                <div className='line-clamp-1 ml-2'>|</div>
                <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16 ml-2 mr-1">
                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" class=""></path>
                </svg>
                23/02/2024
              </div>
              <p className='text-justify'>
				        Bước 1: Băng bảo vệ hình xăm ngay sau khi xăm và tháo băng sau 1 - 2 giờ
                Bước 2: Trong 7 ngày đầu: Luôn rửa sạch hình xăm với xà phòng nhẹ và nước ấm ít nhất 3 lần/ngày. Rửa vào buổi sáng sau khi ngủ dậy
                Tuyệt đối không sử dụng các loại xà phòng có nhiều hóa chất tạo mùi, tạo màu và chứa nhiều sút, axit&nbsp;&nbsp;
			        </p>
              <a href="#" class="flex font-bold text-sm mt-10 ml-2 hover:text-red-500">
                Đọc thêm
                <svg class="fill-current ml-2 mr-2 font-bold w-4 hover:text-red-500" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M363.8 264.5L217 412.5c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L298.7 256 180.2 136.3c-4.7-4.7-4.7-12.3 0-17L200 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17zm-160-17L57 99.5c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L138.7 256 20.2 375.7c-4.7 4.7-4.7 12.3 0 17L40 412.5c4.7 4.7 12.3 4.7 17 0l146.8-148c4.7-4.7 4.7-12.3 0-17z" class=""></path>
                </svg>               
              </a>    
            </div>
          </div>
        </section>
      </div>          
      <Footer />
    </>
  )
}
export default Home