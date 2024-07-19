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
        }, 100);
    }, [pathname])

    return (
        <>
            {
                loading &&
                <div className="fixed top-0 left-0 w-full h-full bg-purple-outer-octagon z-50">
                    Loading...
                </div>
            }
        </>
    );
}

export default LoadingScreen;