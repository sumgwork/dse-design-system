import React, { FC } from "react";
import FontSize from "../../foundation/FontSize";

interface TextProps {
  size?: keyof typeof FontSize;
}

const Text: FC<TextProps> = ({ size = "base", children }) => {
  const className = `dse-font-${size}`;

  return <span className={className}>{children}</span>;
};

export default Text;
