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
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                {/* Navbar content */}
                Devgorithm
            </div>
        </nav>
    );
}

export default Admin;