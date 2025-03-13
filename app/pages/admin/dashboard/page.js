import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import HeaderAdmin from '@/app/components/HeaderAdmin/HeaderAdmin'
import CustomDashboardIcon from '@/app/customcomponents/CustomDashboardIcon'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='container m-auto px-5'>
            {/* <HeaderAdmin /> */}
            <div className='grid grid-cols-12'>
               {/* <AdminSidebar /> */}
                <div className='col-span-12 lg:col-span-7'>
                    <h3 className='text-white text-center font-bold'>preview</h3>
                </div>
            </div>
        </div>
    )
}
