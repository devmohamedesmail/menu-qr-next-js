import React from 'react'
import Link from 'next/link'
export default function CustomDashboardIcon({title,image,link}) {
    return (
        <Link href={`${link}`}
          className=' shadow-4xl  flex flex-col justify-center border-0 items-center  text-center py-2 rounded-2xl h-40 bg-amber-600'>
            <img src={image} alt={title} className='w-30 h-30' />
           <p className='text-white font-extrabold'>{title}</p>
        </Link>
    )
}
