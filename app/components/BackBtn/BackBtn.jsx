'use client'
import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

export default function BackBtn() {
    const router = useRouter();
  return (
    <div className='flex justify-start items-center px-5 my-10'>
        <button onClick={() => router.back()} className='bg-amber-600 p-3 rounded-full'>
             <IoMdArrowBack />
        </button>
    </div>
  )
}
