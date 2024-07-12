import React from 'react'

const WelgoCard = () => {
  return (
    <section
    className="w-[450px] bg-white px-20 py-24 relative h-fit"
    ref={addToWellgoRef}
  >
    <span
      className="bg-orange-dark absolute h-12 w-12 flex items-center justify-center  drop-shadow-white"
      ref={addToOctaRef}
    >
      20
    </span>
    <p className="w-full h-full font-bold text-purple-text">
      Welcome the crackling anxieties, knowing theyll soon wither in the
      wind.
    </p>
  </section>
  )
}

export default WelgoCard