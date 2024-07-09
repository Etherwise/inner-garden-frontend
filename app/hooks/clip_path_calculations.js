const useClipPath = () => {
  const hexagonClip = (anglePixel=12, shapeRef) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      shapeRef.current.style.clipPath = `polygon(${leftEdge1}% 0%, ${rightEdge1}% 0%, 100% 50%, ${rightEdge2}% 100%, ${leftEdge2}% 100%, 0% 50%)`;
    }
  }

  const squareClip = (upperAnglePercent = 20 , lowerAnglePercent = 12 , shapeRef) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      
      const leftEdge1 = (upperAnglePercent / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = (upperAnglePercent / width) * 100;
      const leftEdge2 = (upperAnglePercent / width) * 100;

      const leftEdge4 = (lowerAnglePercent / width) * 100;
      const rightEdge3 = 100 - leftEdge4;
      const rightEdge4 = 100 - leftEdge4;
      const leftEdge3 = 100 - leftEdge4;
                                                          // 1                    2                   3                   4                5                      6                         7                  8 
      shapeRef.current.style.clipPath = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`;
    }
  }

  const arrowClip = (anglePixel=80, shapeRef , side = "left") => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      shapeRef.current.style.clipPath = `polygon(${leftEdge1}% 0%, ${rightEdge1}% 0%, ${side === "right" ? 100-(leftEdge1*2) : 100}% 50%, ${rightEdge2}% 100%, ${leftEdge2}% 100%, ${side === "left" ? 0+(leftEdge1*2) : 0}% 50%)`;
    }
  }

  const rectClip = (anglePixel=80, shapeRef , side = "left") => { // pending
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      shapeRef.current.style.clipPath = `polygon(${leftEdge1}% 0%, ${rightEdge1}% 0%, ${side === "right" ? 100-(leftEdge1*2) : 100}% 50%, ${rightEdge2}% 100%, ${leftEdge2}% 100%, ${side === "left" ? 0+(leftEdge1*2) : 0}% 50%)`;
    }
  }

  return { hexagonClip , squareClip , arrowClip , rectClip };
};

export default useClipPath;
