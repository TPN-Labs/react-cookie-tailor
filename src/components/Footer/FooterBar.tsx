import React, { useEffect, useState } from "react";
import { CookieCategory, CookieCategoryDefinition, Labels } from "../../types";
import { getCategoryTitleAndDescription } from "../../constants";

interface FooterBarProps {
  labels: Labels;
  categories: CookieCategory[];
  primaryColor: string;
  toggleModal: () => void;
}

export const FooterBar = ({ labels, categories, primaryColor, toggleModal }: FooterBarProps) => {
  const mandatoryCookies: CookieCategoryDefinition = {
    id: 0,
    title: getCategoryTitleAndDescription(labels, CookieCategory.MANDATORY).title,
    description: getCategoryTitleAndDescription(labels, CookieCategory.MANDATORY).description,
    enabled: false,
    status: true,
    type: CookieCategory.MANDATORY,
  };

  const [enabledCategories, setEnabledCategories] = useState<CookieCategoryDefinition[]>([
    mandatoryCookies,
  ]);

  const providedCategories: CookieCategoryDefinition[] = categories.map((category, idx) => {
    const categoryTitleAndDescription = getCategoryTitleAndDescription(labels, category);
    return {
      id: idx + 1,
      title: categoryTitleAndDescription.title,
      description: categoryTitleAndDescription.description,
      enabled: true,
      status: true,
      type: category,
    };
  });

  useEffect(() => {
    setEnabledCategories([mandatoryCookies, ...providedCategories]);
  }, []);

  const switchCheckbox = (category: CookieCategoryDefinition) => {
    const newCategories = enabledCategories.map((enabledCategory) => {
      if (enabledCategory.type === category.type) {
        return {
          ...enabledCategory,
          status: !enabledCategory.status,
        };
      }
      return enabledCategory;
    });
    setEnabledCategories(newCategories);
  };

  return (
    <>
      <div
        className={
          "rct-grid rct-grid-flow-row-dense rct-grid-cols-2 " +
          "md:rct-grid-cols-4 lg:rct-grid-cols-5 grid-rows-3"
        }
      >
        {enabledCategories.map((category, idx) => (
          <div className={"rct-border rct-m-3 rct-rounded"} key={`category_${idx}`}>
            <label
              htmlFor={`${category.type}_checkbox`}
              className={"rct-h-6 rct-relative rct-inline-block"}
            >
              <span
                className={"rct-mr-2 rct-font-bold rct-font-sans rct-tracking-wide"}
                style={{ color: primaryColor }}
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
            style={{ color: primaryColor }}
          >
            {labels.main.moreSettings}
          </span>
        </div>
      </div>
    </>
  );
};
