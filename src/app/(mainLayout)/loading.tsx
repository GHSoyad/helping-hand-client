import React from 'react';

const Loading = () => {
  return (
    <div className='absolute bg-neutral-focus/80 w-full h-full top-0 left-0 rounded-lg flex justify-center items-center'>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;