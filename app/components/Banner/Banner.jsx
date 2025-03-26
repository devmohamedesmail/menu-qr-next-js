import React from 'react'

export default function Banner() {
  return (
    <div className='container m-auto px-5'>


      <div className='px-0 md:px-20  flex flex-col md:flex-row my-3'>
        <div className='flex-1 m-2'>
          <img src="/images/banner1.jpg" alt="banner" className=' h-52 w-full rounded-2xl' />
        </div>



        <div className='flex-1 m-2'>
          <img src="/images/banner2.jpg" alt="banner" className=' h-52 w-full rounded-2xl' />
        </div>
      </div>

    </div>
  )
}
