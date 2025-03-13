'use client'
import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import { MdDelete } from "react-icons/md";
export default function CustomDeleteBtn({ category, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const {t} = useTranslation()


  const handleDelete = () => {
    onDelete(category);
    // setShowModal(false); 
  };

  
  return (
    <>
    <button className="btn btn-error bg-red-700 flex-1 text-white mx-1"  onClick={() => setShowModal(true)}> <MdDelete color="white" /></button>

    {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
              🗑️
            </h3>
            <p className="py-4 text-center font-bold">{t('delete-alert')}</p>
            <div className="modal-action">
              <button 
                className="btn text-white bg-red-600" 
                onClick={handleDelete}
              >
                {t('delete')}
              </button>
              <button className="btn btn-primary" onClick={()=>setShowModal(false)}>{t('close')}</button>
              
            </div>
          </div>
        </dialog>
      )}
        
    </>
    
  )
}
