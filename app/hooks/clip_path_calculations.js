const useClipBuilder = () => {
  
  const hexagonClip = (shapeRef, anglePixel=12) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      shapeRef.current.style.clipPath = `polygon(${leftEdge1}% 0%, ${rightEdge1}% 0%, 100% 50%, ${rightEdge2}% 100%, ${leftEdge2}% 100%, 0% 50%)`;
    }
  }

  const squareClip = (shapeRef, upperAnglePercent = 20 , lowerAnglePercent = 12) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      
      const leftEdge1 = upperAnglePercent;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = upperAnglePercent;
      const leftEdge2 = upperAnglePercent;

      const leftEdge4 = lowerAnglePercent;
      const rightEdge3 = 100 - leftEdge4;
      const rightEdge4 = 100 - leftEdge4;
      const leftEdge3 = 100 - leftEdge4;
  
      shapeRef.current.style.clipPath = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`;
    }
  }

  const arrowClip = (shapeRef, anglePixel=80, side = "left") => {
    if (shapeRef.current) {
      
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      shapeRef.current.style.clipPath = `polygon(0% 0%, ${rightEdge1}% 0%, ${side === "right" ? 100-(leftEdge1) : 100}% 50%, ${rightEdge2}% 100%, 0% 100%, ${side === "left" ? 0+(leftEdge1) : 0}% 50%)`;
    }
  }

  const rectClip = (shapeRef, upperAnglePercent=20, lowerAnglePercent = 20) => {
    if (shapeRef.current) {

      const width = shapeRef.current.clientWidth;
      const height = shapeRef.current.clientHeight;
      
      const leftEdge1 = upperAnglePercent;
      const leftEdge2 = upperAnglePercent + (upperAnglePercent)

      const rightEdge1 = 100 - upperAnglePercent;
      const rightEdge2 = upperAnglePercent + (upperAnglePercent)
 
      const rightEdge4 = 100 - lowerAnglePercent;
      const rightEdge3 = (100- lowerAnglePercent) - (lowerAnglePercent)
      
      const leftEdge4 = lowerAnglePercent;
      const leftEdge3 = (100-lowerAnglePercent) - (lowerAnglePercent)

      shapeRef.current.style.clipPath = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`; 
    }
  }

  return { hexagonClip , squareClip , arrowClip , rectClip };
};

export default useClipBuilder;