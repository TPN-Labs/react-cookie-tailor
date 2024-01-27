import React from "react";
import { CookieCategoryDefinition, TailorColors, TailorCookiesDetails } from "../../../types";
import { ModalCookieContainer } from "./ModalCookieContainer";
import { useCategoryContext } from "../../../hooks";

interface ModalDetailsTabProps {
  colors: TailorColors;
  cookies: TailorCookiesDetails;
}

export const ModalDetailsTab = ({ colors, cookies }: ModalDetailsTabProps) => {
  const { enabledCategories } = useCategoryContext();

  return (
    <div>
      {enabledCategories.map((category: CookieCategoryDefinition) => {
        return (
          <ModalCookieContainer
            key={category.id}
            colors={colors}
            cookies={cookies.data.filter((cookie) => cookie.category === category.type)}
            type={category}
          />
        );
      })}
    </div>
  );
};
