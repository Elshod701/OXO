import clsx from "clsx";
import React from "react";

const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx({
        "rounded-lg bg-[#19191C] px-4 py-2 text-[#fff] font-medium hover:bg-[#6e6e6e]":
          variant === "addvert",
        "rounded-2xl bg-[#19191C] px-[150px] py-[18px] text-[#fff] font-medium hover:bg-[#6e6e6e]":
          variant === "login",
        "rounded-lg bg-[#19191C] px-[50px] py-[13px] text-[#fff] font-medium hover:bg-[#6e6e6e]":
          variant === "search",
        "rounded-lg bg-[#be0000] px-[20px] py-[7px] text-[#fff] font-medium hover:bg-[#640000]":
          variant === "log out",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
