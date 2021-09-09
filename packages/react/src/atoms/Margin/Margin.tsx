import React, { FC } from "react";
import { Spacing } from "@ds.e/foundation";
import "@ds.e/scss/lib/Margin.css";

interface MarginProps {
  space?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

const Margin: FC<MarginProps> = ({
  space = "xxxs",
  left,
  right,
  top,
  bottom,
  children,
}) => {
  let className = "";

  if (!left && !right && !top && !bottom) {
    className = `dse-margin-${space}`;
  }

  if (left) {
    className = `${className} dse-margin-left-${space}`;
  }

  if (right) {
    className = `${className} dse-margin-right-${space}`;
  }

  if (top) {
    className = `${className} dse-margin-top-${space}`;
  }

  if (bottom) {
    className = `${className} dse-margin-bottom-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
