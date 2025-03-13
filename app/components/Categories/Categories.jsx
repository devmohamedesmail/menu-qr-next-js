'use client'
import React, { useContext } from 'react'
import CategoryItem from './CategoryItem'
import CustomSpinner from '@/app/customcomponents/CustomSpinner'
import { DataContext } from '@/app/context/DataProvider'
import { useTranslation } from 'react-i18next'

export default function Categories() {

  const { categories } = useContext(DataContext)
  const {t}=useTranslation()


  return (
    <div className='container m-auto px-5 my-10'>
      <h1 className='text-2xl text-center text-white font-bold my-10'>{t('Categories')} 🔥</h1>

      {categories && categories.length > 0 ? (
        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6   gap-4'>
          {categories.map((category) => (
            <CategoryItem 
            id={category._id}
            key={category._id} 
            title={category.title} 
            image={category.image}
             />
          ))}
        </div>
      ) : (
        <CustomSpinner />
      )}
    </div>
  )
}
