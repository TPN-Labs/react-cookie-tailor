import React from "react";
import "../../css/out/rct_style.css";
import { TailorColors } from "../../types";

interface OutlineButtonProps {
  colors: TailorColors;
  text: string;
  width?: string;
  paddingY?: boolean;
  marginY?: boolean;
  clickFunction: () => void;
}

export const OutlineButton = ({
  colors,
  text,
  paddingY,
  marginY,
  width = "200px",
  clickFunction,
}: OutlineButtonProps) => {
  return (
    <button
      className={
        `rct-float-right ${paddingY ? "rct-py-4" : "rct-py-2"} ${
          marginY ? "rct-my-2" : "rct-my-0"
        } ` +
        "rct-cursor-pointer rct-font-sans rct-font-bold rct-text-white rct-tracking-wide rct-uppercase"
      }
      style={{
        color: colors.primary,
        borderColor: colors.primary,
        backgroundColor: colors.background,
        width,
      }}
      onClick={() => clickFunction()}
    >
      {text}
    </button>
  );
};
