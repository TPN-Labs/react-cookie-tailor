import React, { useState, createContext, useContext, ReactNode, useCallback } from "react";
import { CookieCategory, CookieCategoryDefinition, TailorLabels } from "../types";
import { getCategoryTitleAndDescription } from "../constants";

const CategoryContext = createContext<any>({});

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategoryContext must be used within an CategoryContext");
  }
  return context;
};

interface CategoryProviderProps {
  children: ReactNode;
  labels: TailorLabels;
  categories: CookieCategory[];
}

export const CategoryProvider = ({ categories, children, labels }: CategoryProviderProps) => {
  const mandatoryCategory: CookieCategoryDefinition = {
    id: 0,
    title: getCategoryTitleAndDescription(labels, CookieCategory.MANDATORY).title,
    description: getCategoryTitleAndDescription(labels, CookieCategory.MANDATORY).description,
    enabled: false,
    status: true,
    type: CookieCategory.MANDATORY,
  };

  const categoryDefinitions: CookieCategoryDefinition[] = categories.map((category, idx) => {
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

  const [enabledCategories, setEnabledCategories] = useState<CookieCategoryDefinition[]>([
    mandatoryCategory,
    ...categoryDefinitions,
  ]);

  const modifyCategory = useCallback(
    (category: CookieCategoryDefinition) => {
      const categoryIndex = enabledCategories.findIndex(
        (enabledCategory) => enabledCategory.type === category.type
      );
      const newCategories = [...enabledCategories];
      newCategories[categoryIndex] = category;
      setEnabledCategories(newCategories);
    },
    [setEnabledCategories]
  );

  return (
    <CategoryContext.Provider
      value={{
        enabledCategories,
        modifyCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
