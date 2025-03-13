import React from 'react'
import { useTranslation } from 'react-i18next'

export default function CloseModalBtn() {
    const {t}=useTranslation()
  return (
    <button className="btn btn-error bg-red-600 text-white h-15 border-0 outline-0 shadow-2xl my-1">{t('close')}</button>
  )
}
