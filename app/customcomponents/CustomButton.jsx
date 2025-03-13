import React from 'react'

export default function CustomButton({title,onClick}) {
  return (
    <div>
        <button className="btn btn-primary shadow-2xl bg-amber-600 border-0 outline-0 w-full h-16"onClick={onClick}>{title}</button>
    </div>
  )
}
