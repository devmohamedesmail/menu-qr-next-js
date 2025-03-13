'use client'
import CustomButton from '@/app/customcomponents/CustomButton'
import CustomInput from '@/app/customcomponents/CustomInput'
import React, { useContext, useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { DataContext } from '@/app/context/DataProvider';
import { useTranslation } from 'react-i18next';
import RegisterForm from '@/app/components/RegisterForm/RegisterForm';
import BackBtn from '@/app/components/BackBtn/BackBtn';
import LanguageSwitcher from '@/app/components/LanguageSwitcher/LanguageSwitcher';
import CustomSpinner from '@/app/customcomponents/CustomSpinner';
import LoginForm from '@/app/components/LoginForm/LoginForm';

export default function page() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [name, setName] = useState("")
  const { setting } = useContext(DataContext);
  const [registerForm, setRegisterForm] = useState(false)
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);




  const toggleForm = () => {
    setRegisterForm(!registerForm)
  }



  // ************************************* Handle Login User start *************************************
  const handleLoginUser = async () => {
    setLoading(true);
    if (!email) {
      setEmailError(true);
      setLoading(false);
      return;
    }
    if (!password) {
      setPasswordError(true);
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })
      const data = await response.json();
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.log("The retoe", error)
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  // ************************************* Handle Login User end *************************************




  return (
    <div>
      
      <div className="container m-auto px-5">
        <div className="flex justify-between items-center">
        <BackBtn />
        <LanguageSwitcher />
        </div>
      </div>
      <div className='container m-auto'>


        <div className='mt-30 flex justify-center items-center'>

          <div className='w-full lg:w-1/3  mx-2 bg-black rounded-4xl  py-10 px-5 relative overflow-hidden'>

            <RegisterForm
              name={name}
              setName={setName}
              email={email}
              emailError={emailError}
              setEmailError={setEmailError}
              setEmail={setEmail}
              password={password}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
              setPassword={setPassword}
              registerForm={registerForm}
              toggleForm={toggleForm}
              setting={setting}
              t={t}
            />





           <LoginForm
           
            email={email}
            emailError={emailError}
            setEmailError={setEmailError}
            setEmail={setEmail}
            password={password}
            passwordError={passwordError}
            setPasswordError={setPasswordError}
            setPassword={setPassword}
            registerForm={registerForm}
            toggleForm={toggleForm}
            setting={setting}
            t={t}

           />

          </div>
        </div>

      </div>
    </div>

  )
}
