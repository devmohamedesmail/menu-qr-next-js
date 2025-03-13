'use client'
import { DataContext } from '@/app/context/DataProvider'
import React, { useContext } from 'react'

export default function Header() {
    const {setting} = useContext(DataContext);
    console.log("setting"+setting);
  return (
    <div className='container m-auto'>
        <div>
            
            {setting ? (
                <div className='flex flex-col items-center'>
                   <img src={setting.image} alt="logo" className='w-fit h-20 rounded-full mx-auto my-10' />
                   <h2 className='font-bold text-2xl'>{setting.name}</h2>
                </div>
            ):(<></>)}         
        </div>
    </div>
  )
}
