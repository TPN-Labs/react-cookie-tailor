import { Label } from "../../types/label";
import { TailorColors } from "../../types/color";
import { CookieCategoryDefinition } from "../../types/category";
import PrimaryButton from "../Buttons/PrimaryButton";
import OutlineButton from "../Buttons/OutlineButton";
import "../../css/out/rct_style.css";

type FooterTrailingProps = {
  labels: Label;
  colors: TailorColors;
  funcAccept: (categories: CookieCategoryDefinition[]) => void;
  funcDecline: () => void;
}

export default function FooterTrailing({
  labels,
  funcAccept,
  funcDecline,
  colors,
}: FooterTrailingProps) {
  const buttonWidth = "240px";

  return (
    <div>
      <div>
        <PrimaryButton
          colors={colors}
          text={labels.main.buttonAllow}
          width={buttonWidth}
          clickFunction={() => {
            // funcAccept(enabledCategories);
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
