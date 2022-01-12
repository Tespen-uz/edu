import React from "react";
import Link from "next/link";

const CtaButton = ({ children, className, ...props }) => {
  return (
    <Link href="/sign-up">
      <a
        className={`${className} block text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default CtaButton;
