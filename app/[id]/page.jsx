'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataProvider';
import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';
import Banner from '../components/Banner/Banner';
import Meals from '../components/Meals/Meals';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';

export default function page() {
    const { id } = useParams();
    const { tableNo, setTableNo } = useContext(DataContext);


    useEffect(() => {
        setTableNo(id)
    }, [id])
    return (
        <div>
            <div className='container m-auto px-5 py-10'>
                <p className='text-center text-amber-600 text-xl'> اهلا وسهلا بك علي طاوله رقم </p>
                <p className='text-center text-white font-bold text-3xl my-2'>{tableNo}</p>
            </div>
            <Header />
            
            <Categories />
            <Banner />
             <Meals />

          <BottomNavbar />
        </div>
    )
}
