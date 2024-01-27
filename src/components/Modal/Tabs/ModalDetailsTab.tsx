import React from "react";
import {
  CookieCategoryDefinition,
  TailorColors,
  TailorCookiesDetails,
  Label,
} from "../../../types";
import { ModalCookieContainer } from "./ModalCookieContainer";
import { useCategoryContext } from "../../../hooks";

interface ModalDetailsTabProps {
  colors: TailorColors;
  cookies: TailorCookiesDetails;
  labels: Label;
}

export const ModalDetailsTab = ({ colors, cookies, labels }: ModalDetailsTabProps) => {
  const { enabledCategories } = useCategoryContext();

  return (
    <div>
      {enabledCategories.map((category: CookieCategoryDefinition) => {
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
