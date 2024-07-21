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
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = () => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const { hexagonClip } = useClipBuilder();

    useEffect(() => {
        hexagonClip(dividerPullerRef, 4);
        meterContainerRef.current.style.clipPath = 'polygon(20% 0 , 80% 0, 100% 7% , 100% 17% , 80% 24% , 80% 76% , 100% 83% , 100% 93% , 80% 100% , 20% 100% , 0 93% , 0 83%, 20% 76% , 20% 24% , 0 17% , 0 7%)'

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if (value === 0) {
            meterContainerRef.current.style.background = "conic-gradient(#41AD49 0deg 90deg , #FAA819 90deg 270deg , #41AD49 270deg 360deg)";
        } else {
            meterContainerRef.current.style.background = "conic-gradient(#41AD49 0deg 90deg , #855AA5 90deg 270deg , #41AD49 270deg 360deg)";
        }
    }, [value]);

    return (
        <>
            <div
                className="w-[100px] h-[350px] bg-conic-gradient-green-purple-green flex items-center relative z-0 clip-polygon-hexagon"
                ref={meterContainerRef}
            >
                <div className="relative w-[100px] h-[52%] bg-transparent overflow-hidden select-none z-0" ref={sliderRef}>
                    <div className="w-full bg-[#41AD49] transition-height ease" style={{ height: `${100 - value}%` }}></div>
                    <div
                        className="absolute left-0 right-0 h-[2px] bg-yellow-light cursor-pointer z-10"
                        style={{ bottom: `${value}%` }}
                        onMouseDown={handleMouseDown}
                    >
                        <span
                            className="bg-yellow-light block w-[40%] h-[580%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-20"
                            ref={dividerPullerRef}
                        />
                    </div>
                    <div className="w-full bg-[#855AA5] transition-height ease" style={{ height: `${value}%` }}></div>
                </div>
            </div>
            <button
                className="p-4 mt-5 bg-gray-500 text-white rounded-lg"
                onClick={() => {
                    console.log('value -', value);
                    console.log('topValue -', topValue);
                    console.log('bottomValue -', bottomValue);
                }}
            >
                print
            </button>
        </>
    );
};

export default AiHumanMeter;
