import React from "react";
import { Labels, TailorColors } from "../../../types";

interface ModalConsentTabProps {
  labels: Labels;
  colors: TailorColors;
}

export const ModalConsentTab = ({ labels, colors }: ModalConsentTabProps) => {
  return (
    <div>
      <div className={"rct-mb-2"}>
        <span
          className={
            "rct-font-sans rct-text-black rct-font-bold rct-text-xl rct-tracking-wide rct-mb-2"
          }
        >
          {labels.main.title}
        </span>
      </div>
      <div>
        <span
          className={
            "rct-font-sans rct-text-black rct-font-light rct-text-md rct-tracking-wide " +
            "rct-leading-7"
          }
        >
          {labels.main.descriptionStart}
          &nbsp;
          <a
            href={labels.main.descriptionPrivacyLink}
            className={"rct-font-bold"}
            style={{ color: colors.primary }}
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
  );
};
