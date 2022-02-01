import React from "react";

const CtaButton = ({ children, className, ...props }) => {
  return (
    <span
      className={`${className} block text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none`}
      {...props}
    >
      {children}
    </span>
  );
};

export default CtaButton;
