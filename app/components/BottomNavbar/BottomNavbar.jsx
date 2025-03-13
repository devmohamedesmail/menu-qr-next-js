'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useTranslation } from 'react-i18next';


export default function BottomNavbar() {

  const cart = useSelector(state => state.cart.meals)
  const totalPrice = cart.reduce((total, meal) => total + meal.price * meal.quantity, 0).toFixed(2);
  const {t}=useTranslation();

  return (
    <div className='fixed bottom-0 left-0 right-0 flex justify-center items-center bg-black py-2'>
      <div className='flex justify-between items-center w-full px-4'>

        <Link href='/pages/front/offers' className='flex flex-col items-center justify-center flex-1'>
          <img src="/images/fire.svg" className='w-8 h-8' alt="" />
          <h3 className='text-white text-sm'>{t('Offers')}</h3>
        </Link>




        <Link href='/pages/front/cart' className='flex flex-col items-center  justify-center flex-2 bg-amber-600 rounded-4xl'>
          <div className='relative flex flex-col items-center  justify-center'>
            {/* <img src="/images/cart.svg" className='w-8 h-8' alt="" /> */}
            <MdOutlineShoppingCart color='white' size={30} />
            <h3 className='text-white text-sm absolute -top-3 -right-3 bg-black rounded-full w-6 h-6 flex justify-center items-center'>{cart.length}</h3>
            <h3 className='text-white text-sm'> {totalPrice} </h3>
          </div>
        </Link>






        <Link href='/' className='flex flex-col items-center justify-center flex-1'>
          <img src="/images/home.svg" className='w-8 h-8' alt="" />
          <h3 className='text-white text-sm'>{t('Home')}</h3>
        </Link>



      </div>
    </div>
  )
}
