import React, { useEffect, useRef } from 'react'
import ComponentContainer from './componentContainer'
import Image from 'next/image'

const Xbt = ({className}) => {

  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.clipPath = 'polygon(0 0, 85% 0, 100% 8%, 100% 94%, 88% 100%, 0 100%)' 
    }
  }, []);

  return (
    <ComponentContainer className={`${className}`} ref={containerRef}>
          <Image
            src={"/assets/journal_creation/octa_web.svg"}
            alt="octa"
            width={200}
            height={200}
            className="mt-12"
          />
          <div className="text-center">
            <p className="text-purple-text-light text-5xl font-extrabold">
              xb<span className="text-pink-text font-extrabold">t</span>
            </p>
            <p className="text-xl font-bold text-purple-text-light">expanded</p>
            <p className="text-xl font-bold text-purple-text-light">
              behavioural
            </p>
            <p className="text-xl font-bold text-pink-text">therapy</p>
          </div>
          <div className="w-full">
            <p className="text-nowrap bg-pink-text text-xl font-bold w-full py-2 text-center text-white">
              show me a world
            </p>
            <p className="bg-purple-dark text-lg font-medium w-full py-4 text-center text-white">
              where I can live and love in
              <br />
              harmony with myself, others,
              <br />
              and nature.
            </p>
            <p className="w-full bg-white flex justify-center py-10 text-xl leading-8 text-nowrap text-justify font-medium">
            Around the world, a new<br />awareness is blooming<br />— that our emotions,
            like<br />our bodies, are a part of<br />nature, and that we can<br />cultivate
            them like a gar-<br />den. Around the world, a<br />new awareness is bloom-<br />
            ing — that our emotions,<br />like our bodies, are a part<br/>of nature, and that we can
          </p>
          </div>
        </ComponentContainer>
  )
}

export default Xbt
