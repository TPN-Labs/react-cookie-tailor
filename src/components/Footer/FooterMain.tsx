import React from "react";
import { Label, TailorColors } from "../../types";

interface FooterMainProps {
  labels: Label;
  colors: TailorColors;
}

export const FooterMain = ({ labels, colors }: FooterMainProps) => {
  return (
    <>
      <div className={"rct-grid rct-grid-cols-1 rct-mb-2"}>
        <div className={"rct-mb-2"}>
          <span
            className={"rct-font-sans rct-font-bold rct-text-xl rct-tracking-wide rct-mb-2"}
            style={{ color: colors.black }}
          >
            {labels.main.title}
          </span>
        </div>
        <div>
          <span
            className={"rct-font-sans rct-font-light rct-text-md rct-tracking-wide rct-leading-7"}
            style={{ color: colors.black }}
          >
            {labels.main.descriptionStart}
            &nbsp;
            <a
              href={labels.main.descriptionPrivacyLink}
              className={"rct-font-bold"}
              style={{ color: colors.black }}
              target={"_blank"}
              rel="noreferrer"
            >
              {labels.main.descriptionPrivacyTitle}
            </a>
            &nbsp;
            {labels.main.descriptionEnd}
          </span>
        </div>
      </div>
    </>
  );
};
