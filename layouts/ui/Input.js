import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      {...props.register}
      className="pl-2 outline-none border-none w-full flex-grow"
    />
  );
};

export default Input;
