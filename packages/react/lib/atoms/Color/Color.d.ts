import { FC } from "react";
import { Spacing } from "../..";
import "@ds.e/scss/lib/Utilities.css";
interface ColorProps {
    hexCode: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}
declare const Color: FC<ColorProps>;
export default Color;
