import React, { forwardRef } from 'react';

const ComponentContainer = forwardRef(({ children, className = '' }, ref) => {
  return (
    <div ref={ref} className={`relative w-fit h-fit flex flex-col justify-center items-center ${className}`}>
      {children}
    </div>
  );
});

ComponentContainer.displayName = 'ComponentContainer';

export default ComponentContainer;
