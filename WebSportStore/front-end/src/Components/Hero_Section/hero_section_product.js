import React from 'react'
import { Link } from 'react-router-dom'

const hero_section = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">       
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10">
                <Link to='/' className="font-semibold hover:text-red-500">Trang chủ </Link><span>/ Sản phẩm</span>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Products for you</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default hero_section