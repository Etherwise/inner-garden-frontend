import { useState, useEffect, useRef } from 'react';

const useClipPath = () => {
  const hexagon = (anglePixel=12, shapeRef) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const leftEdge = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge;
      const rightEdge2 = 100 - leftEdge;
      const leftEdge2 = (anglePixel / width) * 100;

      shapeRef.current.style.clipPath = `polygon(${leftEdge}% 0%, ${rightEdge1}% 0%, 100% 50%, ${rightEdge2}% 100%, ${leftEdge2}% 100%, 0% 50%)`;
    }
  }

  return { hexagon };
};

export default useClipPath;
