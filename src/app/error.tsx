'use client';
import React from 'react';
import errorEmoji from '@/assets/error-page.png';
import Image from 'next/image';


const ErrorPage = ({
  // error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {

  return (
    <div className='w-screen h-screen relative'>
      <div className='flex flex-col justify-center items-center gap-3 text-center absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 bg-primary-content/25 px-4 py-8 rounded-lg min-w-full md:min-w-fit'>
        <Image
          src={errorEmoji}
          alt="error"
          width={100}
          height={100}
        />
        <h3 className='text-xl md:text-3xl font-semibold' >SOMETHING WENT WRONG!</h3>
        <p className='text-base md:text-xl font-medium'>Something Unexpected Haas Happened. Please Try Again.</p>
        <button
          onClick={() => reset()}
          className='btn border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary'
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;