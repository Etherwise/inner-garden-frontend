'use client'
import React, { useState, useRef, useEffect } from 'react';
import useClipBuilder from '@/app/_hooks/clip_path_calculations';   

const AiHumanMeter = () => {
    const [value, setValue] = useState(50);
    const [topValue, setTopValue] = useState(50);
    const [bottomValue, setBottomValue] = useState(50);

    const sliderRef = useRef(null);
    const dividerPullerRef = useRef(null);
    const meterContainerRef = useRef(null);
    const lowerBlockRef = useRef(null);
    const upperBlockRef = useRef(null);

    const handleMouseMove = (event) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const newHeight = ((event.clientY - rect.top) / rect.height) * 100;
            if (newHeight >= 0 && newHeight <= 100) {
                setValue(100 - Math.round(newHeight));
                setTopValue(100 - (100 - Math.round(newHeight)));
                setBottomValue(100 - Math.round(newHeight));
            }
        }
    };

    const handleMouseUp = () => {
        dividerPullerRef.current.style.cursor = "grab"
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = () => {
        dividerPullerRef.current.style.cursor = "grabbing"
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const { hexagonClip } = useClipBuilder();

    useEffect(() => {
        hexagonClip(dividerPullerRef, 4);
        meterContainerRef.current.style.clipPath = 'polygon(25% 0 , 75% 0, 100% 7% , 100% 17% , 75% 24% , 75% 76% , 100% 83% , 100% 93% , 75% 100% , 25% 100% , 0 93% , 0 83%, 25% 76% , 25% 24% , 0 17% , 0 7%)'

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if (value === 0) {
            meterContainerRef.current.style.background = "conic-gradient(#41AD49 0deg 90deg , #FAA819 90deg 270deg , #41AD49 270deg 360deg)";
        } else if(topValue >=0 & topValue <=49){
            meterContainerRef.current.style.background = "conic-gradient(#D5D1ED 0deg 90deg , #855AA5 90deg 270deg , #D5D1ED 270deg 360deg)";
            upperBlockRef.current.style.background = '#D5D1ED'
        }
        else{
            meterContainerRef.current.style.background = "conic-gradient(#41AD49 0deg 90deg , #855AA5 90deg 270deg , #41AD49 270deg 360deg)";
            upperBlockRef.current.style.background = '#41AD49'
        }
    }, [value]);

    return (
        <>
           <div className='w-[100px] h-[350px] drop-shadow-clip-outline-yellow'>
           <div
                className="w-full h-full bg-conic-gradient-green-purple-green flex items-center relative z-0 clip-polygon-hexagon"
                ref={meterContainerRef}
            >

                    <div className='absolute z-50 left-[50%] translate-x-[-50%] top-[8%] text-xl font-semibold'>{topValue}</div>
                    <div className='absolute z-50 left-[50%] translate-x-[-50%] bottom-[8%] text-xl font-semibold'>{bottomValue}</div>

                <div className="relative w-[100px] h-[52%] bg-transparent overflow-hidden select-none z-0" ref={sliderRef}>
                    
                    <div className="w-full bg-[#41AD49] transition-height ease" style={{ height: `${100 - value}%` }} ref={upperBlockRef}></div>{/* upper block */}
                    
              {/* divider */}<div
                        className="absolute left-0 right-0 h-[2px] bg-yellow-light cursor-grab z-10"
                        style={{ bottom: `${value}%` }}
                        onMouseDown={(el)=>{handleMouseDown(el)}} 
                    >
                        <span
                            className="bg-yellow-light block w-[40%] h-[580%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-20"
                            ref={dividerPullerRef}
                        />
                    </div>  

                    <div className="w-full bg-[#855AA5] transition-height ease" style={{ height: `${value}%` }} ref={lowerBlockRef}></div>{/* lower block */}
                </div>
            </div>
           </div>
        </>
    );
};

export default AiHumanMeter;
