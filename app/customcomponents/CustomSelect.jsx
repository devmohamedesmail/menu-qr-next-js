import React from 'react'
import { useTranslation } from 'react-i18next'

export default function CustomSelect({label,onChange,items}) {
    const {t,i18n}=useTranslation();
    return (
        <div>
            <label className={`text-white block mb-1 ${i18n.language === "ar" ? 'text-right' : ''} `}>{label}</label>
             <select defaultValue="Pick a text editor" className="select select-primary w-full h-16" onChange={onChange}>
                {items && items.length > 0 && items.map((item) => (
                    <option key={item._id} value={item._id}>{item.title}</option>
                ))}

            </select>
        </div>
    )
}
