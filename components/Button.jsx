import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  
  // Customizable props
  variant = 'brandfill', 
  rounded = 'full',
  size = 'md',
  
  // Override styles if needed
  style = {},
  
  // Other props
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-1.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full'
  };

  // Variant classes that use CSS variables
  const variantClasses = {
    brandfill: 'btn-brand-fill',
    brandoutline: 'btn-brand-outline',
    
  };

  // Base classes
  const baseClasses = 'cursor-pointer font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-1';

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${variantClasses[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;