const useClipBuilder = () => {
  
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

  const rectClip = (upperAnglePercent=20, lowerAnglePercent = 20, shapeRef) => { // pending
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

      console.log("leftEdge1 - ",leftEdge1)
      console.log("leftEdge2 - ",leftEdge2)
      console.log("leftEdge3 - ",leftEdge3)
      console.log("leftEdge4 - ",leftEdge4)
      console.log("rightEdge1 - ",rightEdge1)
      console.log("rightEdge2 - ",rightEdge2)
      console.log("rightEdge3 - ",rightEdge3)
      console.log("rightEdge4 - ",rightEdge4)


//                                                 l1                      r1                      r2                    r3                        r4                     l4                   l3                  l2
      shapeRef.current.style.clipPath = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`; 
    }
  }

  return { hexagonClip , squareClip , arrowClip , rectClip };
};

export default useClipBuilder;
