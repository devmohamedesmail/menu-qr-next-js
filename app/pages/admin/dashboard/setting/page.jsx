'use client'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import CustomButton from '@/app/customcomponents/CustomButton';
import CustomImagePicker from '@/app/customcomponents/CustomImagePicker';
import CustomInput from '@/app/customcomponents/CustomInput'
import React, { useState } from 'react'

export default function page() {
    const [name,setName]=useState();
    const [currency,setCurrency]=useState();
    const [image,setImage]=useState();





    // ***************************************** update setting Start ********************************************


    const handleUpdateSetting = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", image);
        formData.append("currency", currency);
        console.log(name,currency,image)
        try {
            const response = await fetch("/api/setting", {
                method: "POST",
                body: formData,
            });
         
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    // ***************************************** update setting End ********************************************




    return (
        <div>
            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />

                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Setting page</h1>
                          <CustomInput value={name || ""} onChange={(e) => setName(e.target.value)}  type='text' label='name'  />
                          <CustomInput value={currency || ""} onChange={(e) => setCurrency(e.target.value)}  type='text' label='Currency'  />
                          <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />
                         <CustomButton title="update" onClick={() => handleUpdateSetting()} />


                    </div>
                </div>
            </div>

        </div>
    )
}
