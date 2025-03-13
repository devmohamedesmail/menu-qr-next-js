import React from 'react'

export default function Banner() {
  return (
    <div className='container m-auto px-5'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>  
           <img src="/images/banner1.jpg" alt="banner" className='w-full h-52 rounded-2xl' />
        </div>
        <div>
           <img src="/images/banner2.jpg" alt="banner" className='w-full h-52 rounded-2xl' />
        </div>
      </div>
    </div>
  )
}
