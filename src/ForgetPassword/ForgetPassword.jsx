import Modal from './Modal';
import { useState } from 'react';
import axios from 'axios';
import PasswordField from './PasswordField';

export default function ForgetPassword() {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetSuccess, setResetSuccess] = useState(false);
    const [confirm, setConfirm] = useState(true);

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleReset = () => {
        if (newPassword == confirmPassword && newPassword != "") {
            setConfirm(true);
            requestSettingPassword();
        } else {
            setConfirm(false);
        }
    }

    const requestSettingPassword = async () => {
        const request = {
            email: "user@example.com",
            password: newPassword
        }
        const BASE_URL = "";
        const { data } = await axios.post(`${BASE_URL}/api/v1/auth/resetPassword`, request);
        if (data.payload.isPasswordUpdated) {
            setResetSuccess(true);
        }
    }

    return (
        <>
            <form class="h-full flex flex-col items-center justify-around p-4 max-w-md mx-auto bg-white mt-10 rounded">

                <a href="https://www.freeiconspng.com/img/18350" title="Image from freeiconspng.com"><img width="60" src="https://www.freeiconspng.com/uploads/forgot-password-icon-9.png" alt="Forgot Password Svg Free" /></a>

                <h1 class="font-medium text-3xl text-center py-4 text-gray-800">Enter Your New Password</h1>
                <div className='w-full'>
                    <PasswordField label="Password*" handlePasswordChange={handleNewPasswordChange} password={newPassword} />
                    <PasswordField label="Confirm Password*" handlePasswordChange={handleConfirmPasswordChange} password={confirmPassword} />
                </div>
                {!confirm && <p className="text-red-900"> Confirmation doesn't succeed. </p>}

                <button class="w-full hover:bg-[#F2385F]-900 bg-[#F2385F] text-white font-medium py-3 px-4 mt-10 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleReset}>
                    Reset
                </button>

            </form>
            {resetSuccess && <Modal />}
        </>
    );
}