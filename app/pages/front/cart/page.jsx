'use client'
import BottomNavbar from '@/app/components/BottomNavbar/BottomNavbar'
import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashAlt } from "react-icons/fa";
import MealItem from '@/app/components/Meals/MealItem';
import { decrease_quantity, increase_quantity, remove_from_cart } from '@/app/redux/cartReducer';
import CustomButton from '@/app/customcomponents/CustomButton';
import { DataContext } from '@/app/context/DataProvider';
import CustomSpinner from '@/app/customcomponents/CustomSpinner';
import BackBtn from '@/app/components/BackBtn/BackBtn';
export default function page() {
  const cart = useSelector(state => state.cart.meals)
  const { tableNo, setTableNo } = useContext(DataContext);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((total, meal) => total + meal.price, 0).toFixed(2);
  const totalQuantity = cart.reduce((total, meal) => total + meal.quantity, 0);
  const [loading, setLoading] = useState(false);







  // ******************************** Handle Delete Item From Cart start *********************************
  const handleDeleteItem = (id) => {
    dispatch(remove_from_cart(id));
  };

  // ******************************** Handle Delete Item From Cart end *********************************


  // *************************************** Quantity Increment start *******************************************
  const handleIncrement = (id) => {
    dispatch(increase_quantity(id))
  }
  const handleDecrement = (id) => {
    dispatch(decrease_quantity(id))
  }
  // *************************************** Quantity Increment end *******************************************



  // *************************************** Send Order start *******************************************
  const handleSendOrder = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({ tableNo, cart })
      });

      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    } finally {
      setLoading(false);
    }

  };
  // *************************************** Send Order end *******************************************




  return (
    <div>
      <div className='container m-auto px-5'> 
        <BackBtn />
      </div>




      <div className='container m-auto px-5'>
        <h1 className='text-2xl text-center text-white font-bold my-10'>Cart</h1>
        {
          cart ? (
            <>
              {cart && cart.length > 0 ? (
                <div>
                  <div className='grid grid-cols-2 gap-5'>

                    {cart.map((meal, index) => (
                      <MealItem
                        key={index}
                        title={meal.title}
                        description={meal.description}
                        image={meal.image}
                        price={meal.price}
                        quantity={meal.quantity}
                        quantityIncrement={() => handleIncrement(meal.id)}
                        quantityDecrement={() => handleDecrement(meal.id)}
                        addtocart={() => handleDeleteItem(meal.id)}
                        icon={<FaRegTrashAlt />}
                      />
                    ))}


                  </div>


                  <div className='my-10 container m-auto px-5'>
                    {
                      loading ? (<CustomSpinner />) : (<CustomButton title={"Send Order"} onClick={() => handleSendOrder()} />)
                    }

                  </div>
                </div>
              ) : (
                <h1 className='text-center text-amber-600'>Cart Empty</h1>
              )}

            </>
          ) : (
            <></>
          )
        }
      </div>


      <BottomNavbar />
    </div>
  )
}
