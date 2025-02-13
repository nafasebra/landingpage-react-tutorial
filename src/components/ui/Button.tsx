import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "solid";
}

function Button({ children, variant = 'solid' }: ButtonProps) {
  if (variant === "outline") {
    return (
      <a
        href="#"
        className="flex items-center gap-3 px-4 py-2 bg-transparent text-primary rounded-md text-center"
      >
        {children}
      </a>
    );
  } else {
    return (
      <a href="#" className="flex items-center gap-3 px-4 py-2 bg-primary text-white rounded-md text-center">
        {children}
      </a>
    );
  }
}

export default Button;
