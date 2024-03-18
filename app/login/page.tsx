"use client"
import { signInCtl } from '@/utils/indext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login = () => {
    const router = useRouter();
    const [data, setData] = useState({ email: '', password: '', error: '', success: false });

    const handleData = (key: string, value: string | boolean) => {
        setData({ ...data, [key]: value })
    }

    const handleLogin = (e: any) => {
        e.preventDefault();

        if (data.email && data.password) { // check if all fields are filled
            const response: any = signInCtl(data.email, data.password);

            if (response?.error) {
                handleData('error', response.error);
                return;
            } else {
                handleData('success', true);
                handleData('error', '');
                localStorage.setItem("authData", JSON.stringify(response));
                router.push("/")
            }
        } else {
            handleData("error", "Please fill all fields"); // if not, show error
        }

    };

    return (
        <div className="w-full h-[80vh] flex justify-center items-center">
            <div className="border flex flex-col w-[400px] px-2">
                {data.error ? (
                    <div className='mt-5 bg-red-500 text-white text-lg w-full text-center py-3 rounded'>{data.error}</div>
                ) : null}
                <h2 className=' my-5 w-full text-center text-3xl'>Login</h2>
                <form onSubmit={handleLogin} className='flex flex-col gap-y-5 py-2'>
                    <input
                        className='w-full border rounded py-3 px-1'
                        type="text"
                        placeholder="email"
                        value={data.email}
                        onChange={(e) => handleData("email", e.target.value)}
                    />
                    <input
                        className='w-full border rounded py-3 px-1'
                        type="password"
                        placeholder="password"
                        value={data.password}
                        onChange={(e) => handleData("password", e.target.value)}
                    />
                    <button type="submit" className='bg-primary text-white py-2.5 rounded'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;