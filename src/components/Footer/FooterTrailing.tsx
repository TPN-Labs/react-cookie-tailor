import React from "react";
import { CookieCategoryDefinition, Label, TailorColors } from "../../types";
import "../../css/out/rct_style.css";
import { OutlineButton, PrimaryButton } from "../Buttons";

interface FooterTrailingProps {
  labels: Label;
  colors: TailorColors;
  funcAccept: (categories: CookieCategoryDefinition[]) => void;
  funcDecline: () => void;
}

export const FooterTrailing = ({
  labels,
  funcAccept,
  funcDecline,
  colors,
}: FooterTrailingProps) => {
  const buttonWidth = "240px";

  return (
    <div>
      <div>
        <PrimaryButton
          colors={colors}
          text={labels.main.buttonAllow}
          width={buttonWidth}
          clickFunction={() => {
            funcAccept([]);
          }}
          marginY
          paddingY
        />
        <br />
        <OutlineButton
          colors={colors}
          text={labels.main.buttonDefault}
          width={buttonWidth}
          clickFunction={funcDecline}
          marginY
          paddingY
        />
      </div>
    </div>
  );
};
