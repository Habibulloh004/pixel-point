import React from "react";

const Button = ({ variant, children, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`transition-all py-3 px-7 font-bold text-white rounded-full ${
        variant == "border"
          ? "border-2 border-primary-blue-200 bg-primary-blue-200/20 hover:bg-primary-blue-200/50 "
          : `bg-primary-blue-200 hover:bg-primary-blue-250 ${disabled && "bg-primary-blue-250 text-white/50"}`
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
