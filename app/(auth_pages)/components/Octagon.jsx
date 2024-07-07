import React from 'react'

const Octagon = ({children}) => {
  return (
    <div className="bg-purple-bg-light h-screen flex items-center justify-center">
    <div className="octa w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[white] clip-octagon flex items-center justify-center ">
        <div className="octa w-[97%] h-[97%] bg-purple-outer-octagon clip-octagon flex items-center justify-center">
            <div className="octa w-[85%] h-[85%] bg-white clip-octagon flex items-center justify-center">
                <div className="octa w-[96%] h-[96%] bg-purple-inner-octagon clip-octagon items-center  justify-center flex flex-col">
{children}
                </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Octagon
