// src/components/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outlined" | "filled";
  onClick?: () => void;
  className?: string
};

const Button = ({ children, variant = "outlined", onClick , className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-1 rounded-[10px] font-space font-medium transition-all cursor-pointer",className,
        variant === "outlined"
          ? "border border-white text-white hover:bg-white hover:text-black"
          : "bg-blue-500 text-white hover:bg-blue-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
