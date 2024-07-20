'use client'
import React, { useState, useRef, useEffect } from 'react';
import './AiHumanMeter.css';

const AiHumanMeter = () => {
    const [value, setValue] = useState(50);
    const [topValue, setTopValue] = useState(50);
    const [bottomValue, setBottomValue] = useState(50);
    
    const sliderRef = useRef(null);

    const handleMouseMove = (event) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const newHeight = ((event.clientY - rect.top) / rect.height) * 100;
            if (newHeight >= 0 && newHeight <= 100) {
                setValue(100 - Math.round(newHeight));
                setTopValue(100 - (100 - Math.round(newHeight)));
                setBottomValue(100 - Math.round(newHeight));
                // console.log('value -',value)
                // console.log('topValue -',topValue)
                // console.log('bottomValue -',bottomValue)
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

    useEffect(() => {
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
        <div className="meter" ref={sliderRef}>
            <div className="top" style={{ height: `${100 - value}%` }}></div>
            <div className="divider" style={{ bottom: `${value}%` }} onMouseDown={handleMouseDown}></div>
            <div className="bottom" style={{ height: `${value}%` }}></div>
        </div>


            <button className=' p-4 mt-5 bg-gray-500 text-white rounded-lg' onClick={()=>{
                console.log('value -',value)
                console.log('topValue -',topValue)
                console.log('bottomValue -',bottomValue)
            }}>
            print
            </button>

        </>
    );
};

export default AiHumanMeter;
