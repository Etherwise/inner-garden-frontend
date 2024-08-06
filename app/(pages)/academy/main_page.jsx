"use client"

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Screen2 from "./_components/screen2";


const MainPage = () => {

  useEffect(() => {
    return () => {
      document.querySelector("body").style.background = "#1B225A";
    }
  }, []);
  
  return (
    <>
      <div className="h-[50vh] border-2 border-black">
        
      </div>
      <Screen2 />
    </>
  );
}
export default MainPage;