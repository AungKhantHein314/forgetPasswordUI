import Modal from './Modal';
import { useState } from 'react';
import axios from 'axios';
import PasswordField from './PasswordField';

export default function ForgetPassword() {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetSuccess, setResetSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleReset = () => {
        if (newPassword === confirmPassword && newPassword !== "") {
            setErrorMsg("");
            requestSettingPassword();
        } else {
            setErrorMsg("Passwords do not match.")
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
            <form className="h-full flex flex-col items-center justify-around p-4 max-w-[496px] mx-auto bg-white mt-10 rounded">

                <div className='flex flex-col items-center py-3'>
                    <img width="60" src="./Group.png" alt="Forgot Password Svg Free" />

                    <h1 className="font-sans text-xl font-bold text-center text-[#09101D]">Enter Your New Password</h1>
                </div>
                <h1 className="hidden absolute font-sans text-xl font-normal text-center py-2 text-[#BEBBBB]">we will send a verification code to your email ID.</h1>
                <h1 className="hidden absolute font-sans text-xl font-bold text-center py-2 text-[#323F4B]">Enter the verification code sent to your email</h1>

                <div className='w-full py-3'>
                    <PasswordField label="Password*" handlePasswordChange={handleNewPasswordChange} password={newPassword} errorMsg="" />
                    <PasswordField label="Confirm Password*" handlePasswordChange={handleConfirmPasswordChange} password={confirmPassword} errorMsg={errorMsg} />
                </div>

                <button className="w-full hover:bg-[#F2385F]-900 bg-[#F2385F] text-white font-medium py-3 px-4 mt-10 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleReset}>
                    Reset
                </button>

            </form>
            {resetSuccess && <Modal />}
        </>
    );
}