import React from "react";
import { Labels } from "../../types";
import "../../css/out/rct_style.css";
import { OutlineButton, PrimaryButton } from "../Buttons";

interface FooterTrailingProps {
  labels: Labels;
  primaryColor: string;
  funcAccept: () => void;
  funcDecline: () => void;
}

export const FooterTrailing = ({
  labels,
  funcAccept,
  funcDecline,
  primaryColor,
}: FooterTrailingProps) => {
  const buttonWidth = "240px";

  return (
    <div>
      <div>
        <PrimaryButton primaryColor={primaryColor} text={labels.main.buttonAllow} width={buttonWidth} clickFunction={funcAccept} />
        <br />
        <OutlineButton primaryColor={primaryColor} text={labels.main.buttonDefault} width={buttonWidth} clickFunction={funcDecline} />
      </div>
    </div>
  );
};
