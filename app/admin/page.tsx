"use client"
import { getAuthDataFromLocalStorage } from "@/utils/indext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Admin = () => {
    const router = useRouter();

    useEffect(() => {
        const authData = getAuthDataFromLocalStorage();

        if (!authData) {
            router.push("/login");
        } else if (authData?.role !== 'admin') {
            router.push('/');
        }
    }, []);

    return (
        <div className="flex flex-row justify-between px-10">
            <div>
                Devgorithm
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Our Service</li>
            </ul>
            <div className=" flex gap-3">
                <button className="px-20 py-10 bg-black text-white rounded-2xl text-center "> Sign Out</button>
                <button className="px-20 py-10 bg-[yellow] text-white roundes-2xl text-center"> Sign Out</button>
            </div>
        </div>
    );
}

export default Admin;