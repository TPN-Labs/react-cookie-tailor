import React from "react";
import "../../css/out/rct_style.css";

interface OutlineButtonProps {
  primaryColor: string;
  text: string;
  width?: string;
  paddingY?: string;
  marginY?: string;
  marginR?: string;
  clickFunction: () => void;
}

export const OutlineButton = ({
  primaryColor,
  text,
  paddingY = "4",
  marginY = "2",
  marginR,
  width = "200px",
  clickFunction,
}: OutlineButtonProps) => {
  return (
    <button
      className={
        `rct-float-right rct-py-${paddingY} rct-my-${marginY} rct-cursor-pointer ` +
        "rct-font-sans rct-font-bold rct-text-white rct-tracking-wide rct-uppercase"
      }
      style={{
        color: primaryColor,
        borderColor: primaryColor,
        backgroundColor: "whitesmoke",
        marginRight: marginR ? marginR : "0",
        width,
      }}
      onClick={() => clickFunction()}
    >
      {text}
    </button>
  );
};
