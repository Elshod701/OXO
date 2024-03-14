import clsx from "clsx";
import React from "react";

const Button = ({ children, variant }) => {
  return (
    <button
      className={clsx({
        "rounded-lg bg-[#19191C] px-4 py-2 text-[#fff] font-medium hover:bg-[#6e6e6e] ":
          variant === "addvert",
        "rounded-2xl bg-[#19191C] px-[110px] py-[18px] text-[#fff] font-medium hover:bg-[#6e6e6e]s":
          variant === "login",
        "rounded-lg bg-[#19191C] px-[50px] py-[13px] text-[#fff] font-medium hover:bg-[#6e6e6e]s":
          variant === "search",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
