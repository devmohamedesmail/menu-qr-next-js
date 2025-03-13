import CustomDashboardIcon from '@/app/customcomponents/CustomDashboardIcon'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function AdminSidebar() {
    const {t}=useTranslation();
    return (
        <div className='col-span-12 lg:col-span-5'>
            <div className='grid grid-cols-2 gap-3'>

                <CustomDashboardIcon title={t('Home')} image="/images/home.svg" link="/pages/admin/dashboard" />
                <CustomDashboardIcon title={t('Categories')} image="/images/category.svg" link="/pages/admin/dashboard/categories" />
                <CustomDashboardIcon title={t('Meals')} image="/images/meal.svg" link="/pages/admin/dashboard/meals" />
                <CustomDashboardIcon title={t('Offers')} image="/images/fire.svg" link="/pages/admin/dashboard/offers" />
                <CustomDashboardIcon title={t('orders')} image="/images/order.svg" link="/pages/admin/dashboard/orders" />
                <CustomDashboardIcon title={t('setting')} image="/images/setting.svg" link="/pages/admin/dashboard/setting" />

            </div>
        </div>
    )
}
