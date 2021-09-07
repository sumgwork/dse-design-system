import React, { FC } from "react";
import "@ds.e/scss/lib/Button.css";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <button aria-label={label} className="dse-button-container">
      {label || "Click"}
    </button>
  );
};

export default Button;
