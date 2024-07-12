const useClipBuilder = () => {
  
  const hexagonClip = (shapeRef, anglePixel=12, pseudo = false) => {
    if (shapeRef.current) {
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      const path = `polygon(${leftEdge1}% 0%, ${rightEdge1}% 0%, 100% 50%, ${rightEdge2}% 100%, ${leftEdge2}% 100%, 0% 50%)`;
      if (pseudo) {
        shapeRef.current.style.setProperty('--path', path);
      }else {
        shapeRef.current.style.clipPath = path;
      }
    }
  }

  const squareClip = (shapeRef, upperAnglePercent = 20 , lowerAnglePercent = 12, pseudo = false) => {
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
      
      const path = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`;
      if (pseudo) {
        shapeRef.current.style.setProperty('--path', path);
      }else {
        shapeRef.current.style.clipPath = path;
      }
    }
  }

  const arrowClip = (shapeRef, anglePixel=80, side = "left", pseudo = false) => {
    if (shapeRef.current) {
      
      const width = shapeRef.current.clientWidth;
      const leftEdge1 = (anglePixel / width) * 100;
      const rightEdge1 = 100 - leftEdge1;
      const rightEdge2 = 100 - leftEdge1;
      const leftEdge2 = (anglePixel / width) * 100;

      const path = `polygon(0% 0%, ${rightEdge1}% 0%, ${side === "right" ? 100-(leftEdge1) : 100}% 50%, ${rightEdge2}% 100%, 0% 100%, ${side === "left" ? 0+(leftEdge1) : 0}% 50%)`;
      if (pseudo) {
        shapeRef.current.style.setProperty('--path', path);
      }else {
        shapeRef.current.style.clipPath = path;
      }
    }
  }

  const rectClip = (shapeRef, upperAnglePercent=20, lowerAnglePercent = 20, pseudo = false) => {
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

      const path = `polygon(${leftEdge1}% 0% , ${rightEdge1}% 0% , 100% ${rightEdge2}% , 100% ${rightEdge3}% , ${rightEdge4}% 100% , ${leftEdge4}% 100% , 0% ${leftEdge3}% , 0% ${leftEdge2}% )`;
      if (pseudo) {
        shapeRef.current.style.setProperty('--path', path);
      }else {
        shapeRef.current.style.clipPath = path; 
      }
    }
  }
  
  const octagonClip = (shapeRef) => { 
    if (shapeRef.current) {
      console.log(shapeRef.current)
      shapeRef.current.style.clipPath = 'polygon(50% 0, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0 50%, 15% 15%)'; 
    }
  }

  

  return { hexagonClip , squareClip , arrowClip , rectClip , octagonClip };
};

export default useClipBuilder;