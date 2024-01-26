import React from "react";
import "../../css/out/rct_style.css";
import { TailorColors } from "../../types";

interface PrimaryButtonProps {
  colors: TailorColors;
  text: string;
  width?: string;
  paddingY?: boolean;
  marginY?: boolean;
  clickFunction: () => void;
}

export const PrimaryButton = ({
  colors,
  text,
  paddingY,
  marginY,
  width = "200px",
  clickFunction,
}: PrimaryButtonProps) => {
  return (
    <button
      className={
        `rct-float-right ${paddingY ? "rct-py-4" : "rct-py-0"} ${
          marginY ? "rct-my-2" : "rct-my-0"
        } rct-my-${marginY}` +
        "rct-cursor-pointer rct-font-sans rct-font-bold rct-tracking-wide rct-uppercase"
      }
      style={{ backgroundColor: colors.primary, color: colors.background, width }}
      onClick={() => clickFunction()}
    >
      {text}
    </button>
  );
};
