import React from "react";

const Input = ({ placeholder, type, addedStyle, addedInputStyle }: any) => {
  return (
    <div className={addedStyle}>
      <input
        className={`block rounded-lg bg-neutral-100 p-4 ${addedInputStyle}`}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
