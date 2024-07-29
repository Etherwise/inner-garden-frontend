import React from 'react'

const ComponentContainer = ({children , className = ''}) => {
  return (
    <div className={`relative w-fit h-fit flex flex-col justify-center items-center ${className}`}>
      {children}
    </div>
  )
}

export default ComponentContainer
