'use client'
import React, { useState, useRef, useEffect } from 'react';
import useClipBuilder from '@/app/_hooks/clip_path_calculations';   
import Image from 'next/image';
import AiHumoMeter from '@/public/assets/aiHumanMeter/aiHumanMeter.svg'

const AiHumanMeter = () => {
    const [value, setValue] = useState(50);
    const [aiValue, setaiValue] = useState(50);
    const [humanValue, sethumanValue] = useState(50);

    const sliderRef = useRef(null);
    const dividerPullerRef = useRef(null);
    const meterContainerRef = useRef(null);
    const lowerBlockRef = useRef(null);
    const upperBlockRef = useRef(null);
    const aiValueRef = useRef(null);
    const humanValueRef = useRef(null);
    const dividerRef = useRef(null);

    const handleMouseMove = (event) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const newHeight = ((event.clientY - rect.top) / rect.height) * 100;
            if (newHeight >= 0 && newHeight <= 100) {
                setValue(100 - Math.round(newHeight));
                setaiValue(100 - (100 - Math.round(newHeight)));
                sethumanValue(100 - Math.round(newHeight));
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
        meterContainerRef.current.style.clipPath = 'polygon(30% 0 , 70% 0, 100% 10% , 100% 22% , 70% 31% , 70% 69% , 100% 78% , 100% 90% , 70% 100% , 30% 100% , 0 90% , 0 78%, 30% 69% , 30% 31% , 0 22% , 0 10%)'

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        if (value === 0) {
            // meterContainerRef.current.style.background = "conic-gradient(#41AD49 0deg 90deg , #FAA819 90deg 270deg , #41AD49 270deg 360deg)";
            meterContainerRef.current.style.opacity = '0%';
            

        } else if(aiValue >=0 & aiValue <=49){
            meterContainerRef.current.style.background = "conic-gradient(#D5D1ED 0deg 90deg , #855AA5 90deg 270deg , #D5D1ED 270deg 360deg)";
            upperBlockRef.current.style.background = '#D5D1ED'
            aiValueRef.current.style.color = '#8858B5'
            meterContainerRef.current.style.opacity = '100%';
            sliderRef.current.style.height = '38%';
        }
        else{
            meterContainerRef.current.style.background = "conic-gradient(#41AD49 0deg 90deg , #855AA5 90deg 270deg , #41AD49 270deg 360deg)";
            upperBlockRef.current.style.background = '#41AD49'
            aiValueRef.current.style.color = '#FFF200'
            meterContainerRef.current.style.opacity = '100%';
            sliderRef.current.style.height = '38%';
        }
    }, [value]);

    return (
        <>
           <div className='w-[100px] h-[300px] relative'>
           <Image src={AiHumoMeter} alt='AiHumanMeter' className=' absolute h-full'/>
           <div className="w-full h-full bg-conic-gradient-green-purple-green flex items-center relative z-0 clip-polygon-hexagon" ref={meterContainerRef}>

                    <div className='absolute z-50 left-[50%] translate-x-[-50%] top-[10%] text-lg leading-none font-bold text-center' ref={aiValueRef}>AI<br />{aiValue}%</div>
                    <div className='absolute z-50 left-[50%] translate-x-[-50%] bottom-[9%] text-lg leading-none font-bold text-center text-[#FFF200]' ref={humanValueRef}>Human<br />{humanValue}%</div>

                <div className="relative w-[100px] h-[38%] bg-transparent overflow-hidden select-none z-0" ref={sliderRef}>  {/* Entire sliding block */}
                    <div className="w-full bg-[#41AD49] transition-height ease" style={{ height: `${100 - value}%` }} ref={upperBlockRef}></div>{/* upper block */}
                    
              {/* divider */}<div className="absolute left-0 right-0 h-[2px] bg-yellow-light cursor-grab z-10" style={{ bottom: `${value}%` }} 
                        onMouseDown={(el)=>{handleMouseDown(el)}}>
            <span className="bg-yellow-light block w-[38%] h-[600%] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-20" ref={dividerPullerRef}/></div>  
                    <div className="w-full bg-[#855AA5] transition-height ease" style={{ height: `${value}%` }} ref={lowerBlockRef}></div>{/* lower block */}
                </div>

            </div>
           </div>
        </>
    );
};

export default AiHumanMeter;
