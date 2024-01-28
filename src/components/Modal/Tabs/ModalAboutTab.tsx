import { Label } from "../../../types/label";
import { TailorColors } from "../../../types/color";

interface ModalAboutTabProps {
  labels: Label;
  colors: TailorColors;
}

export default function ModalAboutTab({ labels, colors }: ModalAboutTabProps) {
  return (
    <div
      className={"rct-font-sans rct-tracking-wide rct-font-light"}
      style={{ color: colors.black }}
    >
      <p>{labels.settings.headers.about.description1}</p>
      <p>{labels.settings.headers.about.description2}</p>
      <p>{labels.settings.headers.about.description3}</p>
      <span>{labels.settings.headers.about.description4}</span>&nbsp;
      <a
        href={labels.settings.headers.about.cookiePolicyLink}
        target="_blank"
        className={"rct-font-bold"}
        rel={"noreferrer"}
        style={{ color: colors.black }}
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
        style={{ color: colors.black }}
      >
        {labels.settings.headers.about.privacyPolicyTitle}
      </a>
      <p>{labels.settings.headers.about.description6}</p>
    </div>
  );
};
