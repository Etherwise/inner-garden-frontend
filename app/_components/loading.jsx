"use client"

import { useEffect, useState } from "react";

const LoadingScreen = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 500)
    }, []);

    return (
        <>
            {
                show &&
                <div className="fixed top-0 left-0 w-full h-full bg-purple-outer-octagon z-50">
                    Loading...
                </div>
            }
        </>
    );
}

export default LoadingScreen;