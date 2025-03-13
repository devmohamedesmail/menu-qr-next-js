'use client'
import React from 'react'
import HeaderAdmin from '@/app/components/HeaderAdmin/HeaderAdmin'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
export default function page() {
    return (
        <div className='container m-auto px-5'>
            <HeaderAdmin />
            
            <div className='grid grid-cols-12'>
               <AdminSidebar />
               
                <div className='col-span-12 lg:col-span-7'>
                    <h3 className='text-white text-center font-bold'>preview</h3>
                </div>
            </div>
        </div>
    )
}
