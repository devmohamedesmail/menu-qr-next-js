import React from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

export default function HeaderAdmin() {
  const{t}=useTranslation();
  return (
   <div>
    <div className="container m-auto">
    <div className='flex justify-between items-center p-3 mb-10 px-5'>
        <LanguageSwitcher />
      
       <div className='flex justify-between items-center'>
        <p>Hi Mohamed Esmail</p>
        <button className='btn btn-primary mx-2'>{t('logout')}</button>
       </div>
    </div>
    </div>
   </div>
  )
}
