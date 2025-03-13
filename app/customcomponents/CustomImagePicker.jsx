'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function CustomImagePicker({ onChange }) {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)


  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)

      if (onChange) {
        onChange(e) 
      }

     
    }
  }

  return (
    <div>

      <label htmlFor="image" className='border py-3 flex flex-col justify-center items-center gap-2 my-3 border-dashed border-amber-600'>
        <p className='text-white'>{t('choose-image')}</p>
        <input id='image' type="file" className='hidden' onChange={ (e) => handleImageChange(e) }  />
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className='w-20 h-20' />
        ) : (
          <img src="/images/image.svg" alt="Default" className='w-20 h-20' />
        )}
      </label>
    </div>
  )
}
