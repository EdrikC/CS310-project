import React from 'react';

const Button = ({
  label, iconURL, backgroundColor, textColor, borderColor, fullWidth, href
}) => {
  // Common class names for styling
  const commonClasses = `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-indigo-500 text-white border-indigo-600"
    } rounded-full ${fullWidth && "w-full"}`;

  // Check if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={commonClasses}
      >
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt='Icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </a>
    );
  } else {
    return (
      <button
        className={commonClasses}
      >
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt='Icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  }
};

export default Button;
