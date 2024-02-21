import React from 'react';

const ButtonBeta = ({ children, ...restProps }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {

  return (
    <button
      className="flex items-center justify-center gap-2 pb-0.5 text-base text-primary font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-primary focus:border-primary"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default ButtonBeta;