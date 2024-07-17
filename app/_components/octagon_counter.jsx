import { useEffect, useRef } from "react";

import useClipBuilder from "../_hooks/clip_path_calculations";

const OctagonCounter = ({ className="", count=0 }) => {
    const octaElementRef = useRef(null);
    
    const { octagonClip } = useClipBuilder();
    
    useEffect(() => {
        octagonClip(octaElementRef, 30);
    }, []);

    return (
        <p ref={octaElementRef} className={`grid place-items-center aspect-square bg-[#4F81E5] p-3 lg:p-6 font-bold text-white ${className}`}>{count}</p>
    );
}

export default OctagonCounter;