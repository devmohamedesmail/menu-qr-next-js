import React from 'react'

export default function CustomLoginInput({icon,placeholder,type,onChange,id}) {
    return (
        <label htmlFor={id} className='border border-amber-600 h-14 flex items-center gap-2 p-2 my-3'>
            {icon}
            <input type={type} id={id} placeholder={placeholder} className='border-0 outline-0 text-white focus:outline-0 focus:border-0' onChange={onChange}  />
        </label>
    )
}
