import React from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import LoginRegisterComponent from '../LoginRegisterComponent/LoginRegisterComponent'

export default function TopHeader() {
  return (
    <div className='container m-auto px-5 flex justify-between items-center'>
        <LanguageSwitcher />
        <LoginRegisterComponent />
    </div>
  )
}
