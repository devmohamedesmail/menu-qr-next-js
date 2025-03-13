'use client'
import CustomInput from '@/app/customcomponents/CustomInput'
import React, { useState,useRef,useContext } from 'react'
import CustomButton from '@/app/customcomponents/CustomButton'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import CustomImagePicker from '@/app/customcomponents/CustomImagePicker'
import HeaderAdmin from '@/app/components/HeaderAdmin/HeaderAdmin'
import CustomSpinner from '@/app/customcomponents/CustomSpinner'
import CustomDeleteBtn from '@/app/customcomponents/CustomDeleteBtn'
import { DataContext } from '@/app/context/DataProvider'
import CustomEditBtn from '@/app/customcomponents/CustomEditBtn'
import { useTranslation } from 'react-i18next'

export default function categoriesPage() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const modalRef = useRef(null);
    const{categories,fetchCategories}=useContext(DataContext)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const modalRefEdit = useRef(null);
    const{t} = useTranslation();

   

    const handleSubmit = async () => {


        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image); // Append file


        setLoading(true)

        try {
            await fetch("/api/categories", {
                method: "POST",
                body: formData,
            });


            fetchCategories();
            setLoading(false)
            modalRef.current?.showModal();
            setTitle("")
            setImage("")
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
            setLoading(false)
        } finally {
            setLoading(false)
        }



    };



    const handleDelete = async (id) => {
        try {

            const response = await fetch(`/api/categories/${id}`, {
                method: 'DELETE',
            })
            console.log(id);
            fetchCategories();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };


    const handleEditCategory = async (id) =>{
        
        try {
            const response = await fetch(`/api/categories/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: selectedCategory._id,
                    title: selectedCategory.title,
                    image: selectedCategory.image, // Send image path if no new upload
                }),
            })
        } catch (error) {
          console.log(error)  
        }
    }


    return (
        <div>

            <HeaderAdmin />
            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />
                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>{t('add-category')}</h1>
                        <CustomInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} label={t('title')} />

                        <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />

                        {loading ? (<CustomSpinner />) : <CustomButton title={t('save')} onClick={() => handleSubmit()} />}

                        <hr className='my-10' />



                        <h4 className='text-white text-center font-bold my-4'>{t('Categories')}</h4>

                       

                        {categories ? (
                            <>
                            {categories && categories.length > 0 ? (
                                 <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                                 {categories.map((category) => (
                                     <div key={category._id} className="mb-4 bg-white rounded-2xl overflow-hidden">
                                         <div className="flex flex-col items-center gap-2">
                                             <img src={category.image} alt={category.title} className="w-full" />
                                             <p className="text-black font-bold">{category.title}</p>
                                             
                                         </div>
                                         <div className='flex justify-between gap-2 my-2 px-2'>
                                     
                                             <CustomDeleteBtn category={category} onDelete={() => handleDelete(category._id)}  />
                                             
                                             <CustomEditBtn onClick={() => {
                                                 modalRefEdit.current?.showModal()
                                                 setSelectedCategory(category)
                                             }} />    
                                             
                                         </div>
                                     </div>
                                 ))}
                             </div>
                            ):(<p className='text-center font-bold'>{t('no-categories')}</p>)}
                            
                            </>
                            
                            
                            
                            
                            ):(<CustomSpinner />)}







                    </div>
                </div>
            </div>





            <dialog ref={modalRefEdit} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{t('edit')}</h3>
                    
                    <div className="modal-action ">
                        <form method="dialog" className=' flex flex-col w-full'>
                           
                            <CustomInput value={selectedCategory?.title} onChange={(e) => setSelectedCategory({ ...selectedCategory, title: e.target.value })}  />
                            <CustomImagePicker onChange={(e) => setSelectedCategory({ ...selectedCategory, image: e.target.files[0] })} />
                            <CustomButton title={t('save')} onClick={() => handleEditCategory(selectedCategory._id) } />   
                            <button className="btn btn-error my-1 bg-red-600 text-white h-15">{t('close')}</button>
                        </form>
                       
                    </div>
                </div>
            </dialog>





            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl text-cnter">
                          ✅
                    </h3>
                    <p className="py-4 text-center">
                        Category Added Successfully
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>






        </div>
    )
}
