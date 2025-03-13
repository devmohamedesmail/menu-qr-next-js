import React, { useState } from 'react'
import CustomButton from '@/app/customcomponents/CustomButton'
import CustomInput from '@/app/customcomponents/CustomInput'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function LoginForm( { registerForm, toggleForm, setting,t,email,password ,setEmail,setPassword,emailError,setEmailError,passwordError,setPasswordError}) {
    const [ loading,setLoading]=useState(false)
    return (
        <div>
            <img src={setting?.image} className='w-fit h-20 rounded-full mx-auto mb-10' alt={setting?.name} />
            <div className='mb-3'>
                <CustomInput
                    type="text"
                    placeholder={t('Email')}
                    icon={<MdOutlineMailOutline />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                {emailError && <p className='text-red-400 text-xs'>{t('Email-error')}</p>}
            </div>
            <div className='mb-3'>
                <CustomInput
                    type="password"
                    placeholder={t('Password')}
                    icon={<FaLock />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className='text-red-400 text-xs'>{t('Password-error')}</p>}
            </div>

            {loading ? (<CustomSpinner />) : (<CustomButton title={t('Login')} onClick={() => handleLoginUser()} />)}
            <button className='btn btn-outline mt-3 w-full h-16' onClick={toggleForm}>{t('Register')}</button>
        </div>
    )
}

export default LoginForm