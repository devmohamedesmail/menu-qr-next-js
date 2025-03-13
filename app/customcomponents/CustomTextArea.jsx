import { useTranslation } from "react-i18next"


export default function CustomTextArea({value,onChange,label}) {
  const {t,i18n}=useTranslation()
  return (
   <div className="my-1">
     <label className={`text-white block mb-1 ${i18n.language === "ar" ? 'text-right' : ''} `}>{label}</label>
     <textarea 
        type="text"  
        className={`textarea textarea-primary w-full  ${i18n.language === "ar" ? 'text-right' : ''}`}
         onChange={onChange} 
         value={value} />  
   </div>
  )
}
