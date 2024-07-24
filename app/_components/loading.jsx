"use client"

import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';


const LoadingScreen = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [loading, setLoading] = useState(1);

    useEffect(() => {
        setLoading(loading+1);

        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, [pathname])

    return (
        <>
            {
                loading &&
                <div className="fixed top-0 left-0 grid place-items-center w-full h-full bg-purple-outer-octagon z-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
                </div>
            }
        </>
    );
}

export default LoadingScreen;