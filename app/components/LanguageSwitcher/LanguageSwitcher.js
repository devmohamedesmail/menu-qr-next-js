'use client';

import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
  };

  return (
    <div className='border border-amber-600 w-fit my-4'>
    <button className={`p-2 transition-colors ease-in-out duration-500 text-sm ${i18n.language === 'en' ? 'bg-amber-600 text-white' : 'bg-transparent'} `} onClick={() => changeLanguage('en')}>English</button>
    <button className={`p-2 transition-colors ease-in-out duration-500 text-sm ${i18n.language === 'ar' ? 'bg-amber-600 text-white' : 'bg-transparent'} `} onClick={() => changeLanguage('ar')}>Arabic</button>
  </div>
  );
};

export default LanguageSwitcher;
