import Link from 'next/link'
import React from 'react'

export default function CategoryItem({id ,image, title }) {
    return (
        <Link href={`/pages/front/categoryMeals/${id}`} className=' rounded-2xl overflow-hidden'>

            <div>
                <img
                    className='rounded-2xl h-32  w-full object-cover'
                    src={image}
                    alt={title} />
            </div>

            <p className='text-center text-white text-sm font-bold mt-3'>{title}</p>
        </Link>
    )
}
