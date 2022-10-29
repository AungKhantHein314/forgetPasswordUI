import React, { useState } from 'react'
import { EyeIcon } from '@heroicons/react/24/outline';
import { EyeSlashIcon } from '@heroicons/react/24/outline';

/**
 * @params param <label, handlePasswordChange, password>
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
            <label class="font-medium block mb-1 mt-6 text-gray-700" for="password">
                {params.label}
            </label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 right-0 flex items-center px-2">
                    <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
                    <label class="rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" for="toggle">{confirmPasswordVisible ? <EyeSlashIcon onClick={handleConfirmPasswordVisible} className="h-6 w-6" aria-hidden="true" /> : <EyeIcon onClick={handleConfirmPasswordVisible} className="h-6 w-6" aria-hidden="true" />}</label>
                </div>
                <input class="appearance-none border-2 rounded w-full leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password" id={params.label} type="password" autocomplete="off"
                    onChange={params.handlePasswordChange} value={params.password} />
            </div>
        </div>
    )
}

export default PasswordField