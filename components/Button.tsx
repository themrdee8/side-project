import React from "react";

const Button = ({ onClick, name, extraStyles }: any) => {
  return (
    <div>
      <button
        className={`bg-green-300/70 text-white p-4 w-52 rounded-xl ${extraStyles}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
