import React from "react";
import { Labels } from "../../../types";

interface ModalAboutTabProps {
  labels: Labels;
  primaryColor: string;
}

export const ModalAboutTab = ({ labels, primaryColor }: ModalAboutTabProps) => {
  return (
    <div className={"rct-font-sans rct-text-black rct-tracking-wide"}>
      <p>{labels.settings.headers.about.description1}</p>
      <p>{labels.settings.headers.about.description2}</p>
      <p>{labels.settings.headers.about.description3}</p>
      <span>{labels.settings.headers.about.description4}</span>&nbsp;
      <a
        href={labels.settings.headers.about.cookiePolicyLink}
        target="_blank"
        className={"rct-font-bold"}
        rel={"noreferrer"}
        style={{ color: primaryColor }}
      >
        {labels.settings.headers.about.cookiePolicyTitle}
      </a>
      <br />
      <br />
      <span>{labels.settings.headers.about.description5}</span>&nbsp;
      <a
        href={labels.settings.headers.about.privacyPolicyLink}
        target="_blank"
        className={"rct-font-bold"}
        rel={"noreferrer"}
        style={{ color: primaryColor }}
      >
        {labels.settings.headers.about.privacyPolicyTitle}
      </a>
      <p>{labels.settings.headers.about.description6}</p>
    </div>
  );
};
