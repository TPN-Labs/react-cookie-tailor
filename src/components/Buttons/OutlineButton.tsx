import React from "react";
import "../../css/out/rct_style.css";

interface OutlineButtonProps {
  primaryColor: string;
  text: string;
  width?: string;
  paddingY?: boolean;
  marginY?: boolean;
  clickFunction: () => void;
}

export const OutlineButton = ({
  primaryColor,
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
        color: primaryColor,
        borderColor: primaryColor,
        backgroundColor: "whitesmoke",
        width,
      }}
      onClick={() => clickFunction()}
    >
      {text}
    </button>
  );
};
