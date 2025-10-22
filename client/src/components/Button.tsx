import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  disabled = false,
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-gradient-to-b from-gray-200 to-gray-300 text-black hover:from-gray-300 hover:to-gray-400 shadow-lg rounded-full',
    secondary: 'bg-[#1a1a1a] text-white border border-white hover:bg-white hover:text-black rounded-full',
    outline: 'bg-transparent text-white border border-white hover:bg-white hover:text-black rounded-full',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // If it's an external link
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }
  
  // If it's an internal link
  if (href && !external) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }
  
  // If it's a button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
};

export default Button;

// Example usage for REGISTER button:
// <Button href="https://eventhubcc.vit.ac.in/EventHub/login" external>
//   REGISTER
// </Button>