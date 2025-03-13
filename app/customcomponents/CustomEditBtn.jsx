import React from 'react'
import { MdModeEdit } from "react-icons/md";

export default function CustomEditBtn({onClick}) {
  return (
    <button className="btn btn-success bg-green-700 flex-1 text-white" onClick={onClick}> <MdModeEdit color='white' /></button>
  )
}
