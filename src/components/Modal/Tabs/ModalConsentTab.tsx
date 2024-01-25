import React from "react";
import { Labels } from "../../../types";

interface ModalConsentTabProps {
  labels: Labels;
  primaryColor: string;
}

export const ModalConsentTab = ({ labels, primaryColor }: ModalConsentTabProps) => {
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
            style={{ color: primaryColor }}
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
