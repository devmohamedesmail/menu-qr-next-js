import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LoginRegisterComponent() {
  const {t}=useTranslation();
  return (

      <div className='border border-amber-600 w-fit py-2 px-2'>
        <Link href="/pages/front/login" className='text-sm '>{t('login-register')}</Link>
      </div>
     
  
  )
}
