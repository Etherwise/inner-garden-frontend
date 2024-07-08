"use client";
import React, { useEffect, useRef, useState } from "react";

const Shape = ({children,width,anglePixel,className}) => {
  const shapeRef = useRef(null);

  const [clipPath, setClipPath] = useState("");

  useEffect(() => {
    const adjustClipPath = () => {
      if (shapeRef.current) {
        const width = shapeRef.current.offsetWidth;
        const leftEdge = (anglePixel / width) * 100; //
        const rightEdge1 = 100-leftEdge;
        const rightEdge2 = 100-leftEdge;
        const leftEdge2 = (anglePixel / width) * 100;
        setClipPath(
          `polygon(${leftEdge}% 0%, ${rightEdge1}% 0%, 100% 50%, ${rightEdge2}% 100%, ${leftEdge2}% 100%, 0% 50%)`
        );
      }
    };

    adjustClipPath();
  }, []);

  return (
    <div
      className={` ${className} py-1 px-8 w-[${width}px]`}
      ref={shapeRef}
      style={{ clipPath }}>
      {children}
    </div>
  );
};

export default Shape;
