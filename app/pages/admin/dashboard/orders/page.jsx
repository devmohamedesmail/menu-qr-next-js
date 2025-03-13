'use client'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import CustomDeleteBtn from '@/app/customcomponents/CustomDeleteBtn';
import CustomEditBtn from '@/app/customcomponents/CustomEditBtn';
import React, { useEffect, useState } from 'react'

export default function page() {


    const [orders, setOrders] = useState([]);



    // ***************************************** Fetch Orders Start ********************************************


    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders', {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            })
            const data = await response.json();
            setOrders(data);
            console.log(data);
        } catch (error) {
            console.log("Error Fetching orders", error);
        }
    }
    // ***************************************** Fetch Orders End ********************************************

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(() => {
            fetchOrders(); // Fetch orders every 5 seconds
        }, 5000);
    
        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />

                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>All Orders {orders.length}</h1>

                        <div>
                            {orders && orders.length > 0 ? (<>
                                {orders.map((order) => (
                                    <div key={order._id} className='bg-amber-500 p-3 rounded-md my-4 flex justify-between items-center'>
                                        <div className='mr-5 border-2 h-10 w-10 border-white  flex justify-center items-center text-center rounded-full'>
                                            {order.tableno}
                                        </div>
                                        <div>
                                            {order.meals.map((meal, index) => (
                                                <div key={index}>
                                                    <div>
                                                        <div className='flex justify-between'>
                                                            <h3 className='mr-10'>{meal.title}</h3>
                                                            <h3 className='mr-10'>{meal.quantity}</h3>
                                                            <h3 className='mr-10'>{meal.price}</h3>
                                                        </div>
                                                    </div>


                                                </div>
                                            ))}
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='flex flex-col justify-between'>
                                                <p>Total</p>
                                                <p>{order.meals.reduce((total, meal) => total + meal.quantity * meal.price, 0)}</p>
                                            </div>
                                            <div>
                                                <CustomDeleteBtn />
                                                <CustomEditBtn />
                                                

                                            </div>
                                        </div>
                                    </div>
                                ))}


                            </>) : (<h1>no orders</h1>)}


                        </div>














                    </div>
                </div>
            </div>

        </div>
    )
}
