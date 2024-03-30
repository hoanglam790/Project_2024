import React from 'react'

const Login = () => {
  return (
    <>
    <section className='flex'>
        <div className='w-full mt-12'>
            <div className='text-center'>
                <h2 className='block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit font-bold mb-4 uppercase'>
                Thông tin đăng nhập
                </h2>
                <p className='block antialiased font-sans text-blue-gray-900 text-lg font-normal'>
                Vui lòng nhập email và mật khẩu của bạn.
                </p>
            </div>
            <form className='mt-10 mb-4 mx-auto w-80 max-w-screen-lg'>
                <div className='mb-2 flex flex-col gap-6'>
                    <p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium'>Email</p>
                    <div className="relative w-full min-w-[200px] h-11">
                        <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mời nhập địa chỉ email của bạn" fdprocessedid="pub4s" />
                    </div>
                </div>
                <div className='mb-2 mt-6 flex flex-col gap-6'>
                    <p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium'>Mật khẩu</p>
                    <div className="relative w-full min-w-[200px] h-11">
                        <input className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**********" fdprocessedid="pub4s" />
                    </div>
                </div>
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm mt-8 py-4 px-7 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] block w-full" type="button" fdprocessedid="11fyci">
                Đăng nhập
                </button>
                <p className='block antialiased font-sans text-sm leading-normal font-medium italic text-gray-900 text-right mt-6'>
                    <a href='#'>Quên mật khẩu ?</a>
                </p>
                <h1 className='font-bold text-center mt-8'>Hoặc</h1>
                <hr className='my-2'></hr>
                <button className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center gap-2 justify-center shadow-md mt-8' type='button'>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1156_824)">
                            <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4"></path>
                            <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853"></path>
                            <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04"></path>
                            <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335"></path>
                        </g>
                        <defs><clipPath id="clip0_1156_824"><rect width="16" height="16" fill="white" transform="translate(0.5)"></rect></clipPath></defs>
                    </svg>
                    <span>Đăng nhập với Google</span>
                </button>

            </form>
        </div>
    </section>
    </> 
  )
}

export default Login