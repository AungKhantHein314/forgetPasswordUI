import React, { useState } from 'react'
import { EyeIcon } from '@heroicons/react/24/solid';
import { EyeSlashIcon } from '@heroicons/react/24/solid';

/**
 * @params param <label, handlePasswordChange, password, errorMsg>
 * @returns 
 */

function PasswordField(params) {
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleConfirmPasswordVisible = () => {
        const password = document.getElementById(params.label);
        if (password.type === 'password') {
            password.type = 'text'
            setConfirmPasswordVisible(true);
        } else {
            password.type = 'password'
            setConfirmPasswordVisible(false);
        }
    }

    return (
        <div className='w-full'>
            <label className="font-sans text-xl font-semibold block mb-1 mt-6 text-[#2A2D43]" for="password">
                {params.label}
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                    <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
                    <label className="rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" for="toggle">{confirmPasswordVisible ? <EyeSlashIcon onClick={handleConfirmPasswordVisible} className="h-6 w-6" aria-hidden="true" /> : <EyeIcon onClick={handleConfirmPasswordVisible} className="h-6 w-6" aria-hidden="true" />}</label>
                </div>
                <input className={`appearance-none border-2 h-[48px] rounded w-full leading-tight border-gray-300 focus:outline-none ${params.errorMsg !== "" && "border-red-900"} focus:border-indigo-700 focus:bg-white text-gray-700 font-sans js-password`} id={params.label} type="password" autocomplete="off"
                    onChange={params.handlePasswordChange} value={params.password} />

            </div>
            <span className='text-red-900'>{params.errorMsg}</span>
        </div>
    )
}

export default PasswordField