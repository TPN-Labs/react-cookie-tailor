import React from "react";
import { CookieCategoryDefinition, TailorCookiesDetails } from "../../../types";

interface ModalDetailsTabProps {
  cookies: TailorCookiesDetails;
  categories: CookieCategoryDefinition[];
  updateCategories: (categories: CookieCategoryDefinition[]) => void;
}

export const ModalDetailsTab = ({
  cookies,
  categories,
  updateCategories,
}: ModalDetailsTabProps) => {
  return (
    <div className={"rct-text-black"}>
      {categories.map((category, idx) => (
        <div key={`category_${idx}`}>
          <h2>{category.title}</h2>
          <p>{category.description}</p>
        </div>
      ))}
      <br />
      {cookies.mandatory && (
        <div>
          <h2>Mandatory</h2>
          <p>{cookies.mandatory.map((cookie) => cookie.title).join(", ")}</p>
        </div>
      )}
      <button onClick={() => updateCategories(categories)}>Update</button>
    </div>
  );
};
