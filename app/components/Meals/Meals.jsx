'use client'
import React, { useContext, useEffect, useState } from 'react'
import MealItem from './MealItem'

import { DataContext } from '@/app/context/DataProvider'
import CustomSpinner from '@/app/customcomponents/CustomSpinner'
import { add_to_cart } from '@/app/redux/cartReducer'
import { useDispatch } from 'react-redux'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useTranslation } from 'react-i18next'

export default function Meals() {
  const [quantities, setQuantities] = useState({});
  const { meals } = useContext(DataContext)
  const dispatch = useDispatch()
  const {t}=useTranslation()





// *************************************** Quantity Increment start *******************************************
const handleIncrement = (id) => {
  
  setQuantities((prevQuantities) => ({
    ...prevQuantities,
    [id]: (prevQuantities[id] || 1) + 1, 
  }));
};

// *************************************** Quantity Increment end *******************************************


// *************************************** Quantity Decrement start *******************************************
const handleDecrement = (id) => {
  setQuantities((prevQuantities) => ({
    ...prevQuantities,
    [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1, // Prevent quantity from going below 1
  }));
};

// *************************************** Quantity Decrement end *******************************************



// *************************************** Add to cart start *******************************************
const handleAddToCart = (meal) => {
  dispatch(add_to_cart({
    id: meal._id,
    title: meal.title,
    price: meal.price,
    description: meal.description,
    quantity: quantities[meal._id] || 1,
    image: meal.image
  }));
};

// *************************************** Add to cart end *******************************************






  return (
    <div className='container m-auto px-5 my-10 mb-40'>

      <h1 className='text-2xl text-center text-white font-bold my-10'> {t('Meals')} 🔥</h1>

      {meals && meals.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
          {meals.map((meal) => (
            <MealItem 
              key={meal._id} 
              title={meal.title} 
              description={meal.description} 
              image={meal.image} 
              price={meal.price}
              quantity={quantities[meal._id] || 1}
              quantityIncrement={() => handleIncrement(meal._id)}
              quantityDecrement={() => handleDecrement(meal._id)}
              addtocart={() => handleAddToCart(meal)}
              icon={<MdOutlineAddShoppingCart />}
              />
          ))}
        </div>
      ) : (<CustomSpinner />)}
    </div>
  )
}
