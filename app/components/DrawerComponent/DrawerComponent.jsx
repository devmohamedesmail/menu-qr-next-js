import React from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import DrawerItem from './DrawerItem';
import { CiShoppingCart } from "react-icons/ci";



export default function DrawerComponent() {
    return (
        <div className="drawer container px-5 m-auto my-4">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                
                
                <div className='flex justify-end items-center'>
                <label htmlFor="my-drawer" className="block w-fit p-3 bg-black border-amber-500 drawer-button">
                    <HiMiniBars3BottomRight color='orange' />

                </label>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                

                    <DrawerItem link="/pages/front/cart" title="Cart" icon={<CiShoppingCart size={20} />} />
                    <DrawerItem link="/pages/front/cart" title="Cart" icon={<CiShoppingCart size={20} />} />
                    <DrawerItem link="/pages/front/cart" title="Cart" icon={<CiShoppingCart size={20} />} />
                    <DrawerItem link="/pages/front/cart" title="Cart" icon={<CiShoppingCart size={20} />} />
                </ul>
            </div>
        </div>

    )
}
