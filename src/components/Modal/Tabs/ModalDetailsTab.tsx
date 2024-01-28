import { TailorColors } from "../../../types/color";
import { TailorCookiesDetails } from "../../../types/cookie";
import { Label } from "../../../types/label";
import { CookieCategoryDefinition } from "../../../types/category";
import ModalCookieContainer from "./ModalCookieContainer";

type ModalDetailsTabProps = {
  colors: TailorColors;
  cookies: TailorCookiesDetails;
  labels: Label;
}

export default function ModalDetailsTab({ colors, cookies, labels }: ModalDetailsTabProps) {
  return (
    <div>
      {[].map((category: CookieCategoryDefinition) => {
        return (
          <div key={category.id}>
            <ModalCookieContainer
              colors={colors}
              cookies={cookies.data.filter((cookie) => cookie.category === category.type)}
              labels={labels}
              type={category}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
};
