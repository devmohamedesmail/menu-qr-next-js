'use client'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";


export default function DrawerItem({ link, title, icon }) {
    return (
        <li className='bg-black my-1 py-2 rounded-xl'>
            <Link href={link} className='flex'>

                <div className='flex items-center flex-1'>

                    <span className='mr-2'>
                        {icon}
                    </span>
                    <span className='text-sm'>
                        {title}
                    </span>
                </div>
                <div >
                    <FaChevronRight color='white' />
                </div>

            </Link>


        </li>
    )
}
