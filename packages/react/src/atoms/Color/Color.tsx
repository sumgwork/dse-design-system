import React, { FC } from "react";
import { Spacing } from "../..";
import "@ds.e/scss/lib/Utilities.css";

interface ColorProps {
  hexCode: string;
  height?: keyof typeof Spacing;
  width?: keyof typeof Spacing;
}

const Color: FC<ColorProps> = ({
  hexCode,
  height = Spacing.sm,
  width = Spacing.sm,
}) => {
  const className = `dse-height-${height} dse-width-${width}`;
  return (
    <div
      className={className}
      style={{
        background: hexCode,
      }}
    />
  );
};

export default Color;
