import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`
        px-md py-sm rounded-md
        bg-primary text-white 
        hover:opacity-90 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};