import React from "react";
import { Label, TailorColors } from "../../../types";
import { defaultCookiePrefix } from "../../../constants";
import { getTailorCookieValue } from "../../../utilities";

interface ModalConsentTabProps {
  labels: Label;
  colors: TailorColors;
}

export const ModalConsentTab = ({ labels, colors }: ModalConsentTabProps) => {
  const cookieId = `${defaultCookiePrefix}id`;
  const createdOn = `${defaultCookiePrefix}created`;
  const clientCookieId = getTailorCookieValue(cookieId);
  const clientCookieCreation = getTailorCookieValue(createdOn);

  return (
    <div>
      <div className={"rct-mb-2"}>
        <span
          className={"rct-font-sans rct-font-bold rct-text-xl rct-tracking-wide rct-mb-2"}
          style={{
            color: colors.black,
          }}
        >
          {labels.main.title}
        </span>
      </div>
      <div>
        <span
          className={"rct-font-sans rct-font-light rct-text-md rct-tracking-wide rct-leading-7"}
          style={{
            color: colors.black,
          }}
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
      <div
        className={"rct-border-solid rct-border-2 rct-rounded-lg rct-p-4 rct-mt-3"}
        style={{ color: colors.black }}
      >
        <span className={"rct-font-bold"}>{labels.main.defaultCreation}: </span>
        <span>{clientCookieCreation}</span>
        <br />
        <br />
        <span className={"rct-font-bold"}>{labels.main.defaultId}: </span>
        <span>{clientCookieId}</span>
      </div>
    </div>
  );
};
