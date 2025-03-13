'use client'
import BottomNavbar from '@/app/components/BottomNavbar/BottomNavbar'
import { useParams } from 'next/navigation';
import React,{useEffect, useState} from 'react'
import CustomSpinner from '@/app/customcomponents/CustomSpinner';
import MealItem from '@/app/components/Meals/MealItem';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '@/app/redux/cartReducer';
import BackBtn from '@/app/components/BackBtn/BackBtn';
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function page() {
const {id}=useParams();
const [meals, setMeals] = useState([]);
const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch()






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
    quantity: quantities[meal._id] || 1,
    image: meal.image
  }));
};

// *************************************** Add to cart end *******************************************






  // ***************************************** Fetch Meals Accrounding to Category  *****************************************

const fetchMealsByCategory = async () => {
  try {
    const res = await fetch(`/api/${id}`);
    const data = await res.json();
    
    setMeals(data.meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
};




useEffect(()=>{
  fetchMealsByCategory()
},[id])



  return (
   <div>



      <div className='container m-auto'>
       <BackBtn />
      </div>



     <div className='container m-auto px-5'>

      {meals ? (
        <>
        {meals && meals.length > 0 ? (
           <div className='grid grid-cols-2 my-10 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
        ):(<h1 className='text-2xl text-center text-white font-bold my-40'>No Meals Found</h1>)}
        </>
        
        ):(<CustomSpinner />)} 
    </div>
    <BottomNavbar />
   </div>
  )
}
