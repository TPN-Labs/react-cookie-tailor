import React from "react";
import "../../css/out/rct_style.css";

interface PrimaryButtonProps {
  primaryColor: string;
  text: string;
  width?: string;
  paddingY?: string;
  marginY?: string;
  clickFunction: () => void;
}

export const PrimaryButton = ({
  primaryColor,
  text,
  paddingY = "4",
  marginY = "2",
  width = "200px",
  clickFunction,
}: PrimaryButtonProps) => {
  return (
    <button
      className={
        `rct-float-right rct-py-${paddingY} rct-my-${marginY} rct-cursor-pointer ` +
        "rct-font-sans rct-font-bold rct-text-white rct-tracking-wide rct-uppercase"
      }
      style={{ backgroundColor: primaryColor, width }}
      onClick={() => clickFunction()}
    >
      {text}
    </button>
  );
};
