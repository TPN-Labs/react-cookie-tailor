import React from "react";
import "../../css/out/rct_style.css";

interface PrimaryButtonProps {
  primaryColor: string;
  text: string;
  width?: string;
  paddingY?: boolean;
  marginY?: boolean;
  clickFunction: () => void;
}

export const PrimaryButton = ({
  primaryColor,
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
        "rct-cursor-pointer rct-font-sans rct-font-bold rct-text-white rct-tracking-wide rct-uppercase"
      }
      style={{ backgroundColor: primaryColor, width }}
      onClick={() => clickFunction()}
    >
      {text}
    </button>
  );
};
