import React from 'react'
import { DotLoader } from 'react-spinners'

export default function CustomSpinner() {
  return (
    <div className='flex justify-center items-center '>
        <DotLoader color='white' />
    </div>
  )
}
