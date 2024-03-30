import React from 'react'
import Header from '../../Components/header_1'
import Footer from '../../Components/footer'
import Image from '../../Images/ball.png' 

const Cart = () => {
  return (
    <>
    <Header />
        <div className='bg-gray-100 h-screen py-8'>
            <div className='container mx-auto px-4'>
                <h1 className='text-2xl font-semibold mb-4'>Giỏ hàng</h1>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='md:w-3/4'>
                        <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th className='text-left font-semibold'>Hình ảnh</th>
                                        <th className='text-left font-semibold'>Giá</th>
                                        <th className='text-left font-semibold'>Số lượng</th>
                                        <th className='text-left font-semibold'>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='hover:bg-gray-100'>
                                        <td className='py-4'>
                                            <div className='flex items-center'>
                                                <img className='h-16 w-16 mr-4' src={Image} alt='Ball' />
                                                <span>Trái bóng</span>
                                            </div>
                                        </td>
                                        <td className='py-4'>100.000đ</td>
                                        <td className='py-4'>
                                            <div className='flex items-center'>
                                                <button className='border rounded-md py-2 px-4 mr-2'>-</button>
                                                <span className='text-center w-8'>1</span>
                                                <button className='border rounded-md py-2 px-4 mr-2'>+</button>
                                            </div>
                                        </td>
                                        <td className='py-4'>100.000đ</td>
                                    </tr>
                                    <tr className='hover:bg-gray-100'>
                                        <td className='py-4'>
                                            <div className='flex items-center'>
                                                <img className='h-16 w-16 mr-4' src={Image} alt='Ball' />
                                                <span>Trái bóng</span>
                                            </div>
                                        </td>
                                        <td className='py-4'>100.000đ</td>
                                        <td className='py-4'>
                                            <div className='flex items-center'>
                                                <button className='border rounded-md py-2 px-4 mr-2'>-</button>
                                                <span className='text-center w-8'>1</span>
                                                <button className='border rounded-md py-2 px-4 mr-2'>+</button>
                                            </div>
                                        </td>
                                        <td className='py-4'>100.000đ</td>
                                    </tr>
                                    <tr>
                                        <a href='#' className='flex font-semibold text-indigo-600 text-sm mt-10'>
                                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                            </svg>
                                            Tiếp tục mua sắm
                                        </a>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Thông tin thanh toán */}
                    <div className='md:w-1/4'>
                        <div className='bg-white rounded-lg shadow-md p-6'>
                            <h2 className='text-lg font-semibold mb-4'>Thông tin</h2>
                            <div className='flex justify-between mb-2'>
                                <span>Tiền</span>
                                <span>100.000đ</span>
                            </div>
                            <hr className='my-2'/>
                            <div className='flex justify-between mb-2'>
                                <span className='font-semibold'>Tổng cộng</span>
                                <span className='font-semibold'>100.000đ</span>
                            </div>
                            <button className='bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full'>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
    </>
  )
}
export default Cart
