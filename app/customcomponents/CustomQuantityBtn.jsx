import React from 'react'

export default function CustomQuantityBtn({icon,onClick}) {
  return (
    <button onClick={onClick}>{icon}</button>
  )
}
