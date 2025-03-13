import React from 'react'
import { useTranslation } from 'react-i18next'

export default function CustomInput({ icon, value , onChange, placeholder, type, label }) {
   const { t, i18n } = useTranslation()
   return (
      <div className='my-3'>
         <label className={`text-white block mb-1 ${i18n.language === "ar" ? 'text-right' : ''} `}>{label}</label>
         <label className="input input-primary w-full h-14 flex items-center gap-2">
            {icon}
            <input
               type={type}
               placeholder={placeholder}
               defaultValue={value} 
               onChange={onChange}
               className={`grow  ${i18n.language === "ar" ? 'text-right' : ''}`} />
         </label>
      </div>
   )
}
