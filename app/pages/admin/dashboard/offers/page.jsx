'use client'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import HeaderAdmin from '@/app/components/HeaderAdmin/HeaderAdmin'
import CustomButton from '@/app/customcomponents/CustomButton'
import CustomImagePicker from '@/app/customcomponents/CustomImagePicker'
import CustomInput from '@/app/customcomponents/CustomInput'
import CustomTextArea from '@/app/customcomponents/CustomTextArea'
import React, { useState } from 'react'
import CustomSpinner from '@/app/customcomponents/CustomSpinner'

export default function page() {


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false);





    const handleAddOffer = async () => {
        const formData = new FormData();
       
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("discount", discount);
        formData.append("image", image);

        setLoading(true)

        try {
            const response = await fetch("/api/offers", {
                method: "POST",
                body: formData,
            });



            setLoading(false)
           // modalRef.current?.showModal();
          
        } catch (error) {
            console.error("Error:", error);

        } finally {
            setLoading(false)
        }

    }







    return (
        <div>





            <HeaderAdmin />




            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />

                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Offers</h1>

                        <CustomInput value={title} onChange={(e) => setTitle(e.target.value)} type={"text"} label={"Title"} />
                        <CustomInput value={price} onChange={(e) => setPrice(e.target.value)} type="number" label={"Price"} />
                        <CustomInput value={discount} onChange={(e) => setDiscount(e.target.value)} type="number" label={"discount"} />
                        <CustomTextArea value={description} onChange={(e) => setDescription(e.target.value)} label={"Description"} />
                        <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />

                        {loading ? (<CustomSpinner />) : (<CustomButton title={"Add Meal"} onClick={() => handleAddOffer()} />)}


                        <hr />
                        <h4 className='text-white text-center font-bold my-4'>All Meals</h4>













                    </div>
                </div>
            </div>

        </div>
    )
}
