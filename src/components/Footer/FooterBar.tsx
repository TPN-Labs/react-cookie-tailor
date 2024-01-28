import React from "react";
import { CookieCategoryDefinition, Label, TailorColors } from "../../types";
import { getCategoryStorage, setCategory } from "../../constants";

interface FooterBarProps {
  labels: Label;
  colors: TailorColors;
  toggleModal: () => void;
}

export const FooterBar = ({ labels, colors, toggleModal }: FooterBarProps) => {
  const enabledCategories = getCategoryStorage();

  const switchCheckbox = (category: CookieCategoryDefinition) => {
    category.status = !category.status;
    setCategory(category);
  };

  return (
    <div
      className={
        "rct-grid rct-grid-flow-row-dense rct-grid-cols-2 " +
        "md:rct-grid-cols-4 lg:rct-grid-cols-5 grid-rows-3"
      }
    >
      {enabledCategories.map((category: CookieCategoryDefinition, idx: number) => (
        <div className={"rct-border rct-m-3 rct-rounded"} key={`category_${idx}`}>
          <label
            htmlFor={`${category.type}_checkbox`}
            className={"rct-h-6 rct-relative rct-inline-block"}
          >
            <span
              className={"rct-mr-2 rct-font-bold rct-font-sans rct-tracking-wide"}
              style={{ color: colors.black }}
            >
              {category.title}
            </span>
            <input
              id={`${category.type}_checkbox`}
              type="checkbox"
              defaultChecked={category.status}
              disabled={!category.enabled}
              onClick={() => {
                switchCheckbox(category);
              }}
            />
          </label>
        </div>
      ))}
      <div
        className={"rct-border rct-rounded rct-mt-3 rct-ml-3 rct-cursor-pointer"}
        onClick={toggleModal}
      >
        <span
          className={"rct-font-bold rct-font-sans rct-tracking-wide"}
          style={{ color: colors.black }}
        >
          {labels.main.moreSettings}
        </span>
      </div>
    </div>
  );
};
