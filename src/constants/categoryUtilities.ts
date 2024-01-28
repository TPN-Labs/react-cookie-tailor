import { CookieCategory, CookieCategoryDefinition, Label } from "../types";
import { defaultCookiePrefix } from "./defaultCookieName";
import { getCategoryTitleAndDescription } from "./mandatoryCookies";

/**
 * This function will return the cookie categories from local storage
 */
export const getCategoryStorage = (): CookieCategoryDefinition[] => {
  const categoryStorage = localStorage.getItem(`${defaultCookiePrefix}categories`);
  if (categoryStorage) {
    return JSON.parse(categoryStorage);
  }
  return [];
};

/**
 * This function will return the category definition for a given category
 * @param labels - the translation labels
 * @param idx - the index of the category
 * @param category - the category
 */
export const getCategoryDefinition = (
  labels: Label,
  idx: number,
  category: CookieCategory
): CookieCategoryDefinition => {
  const categoryTitleAndDescription = getCategoryTitleAndDescription(labels, category);
  return {
    id: idx,
    title: categoryTitleAndDescription.title,
    description: categoryTitleAndDescription.description,
    enabled: true,
    status: true,
    type: category,
  };
};

/**
 * This function will set the cookie category in local storage
 * @param category
 */
export const setCategory = (category: CookieCategoryDefinition) => {
  const categories = getCategoryStorage();
  const categoryIndex = categories.findIndex((cat) => cat.id === category.id);
  if (categoryIndex !== -1) {
    categories[categoryIndex] = category;
  }
  setCategoryStorage(categories);
};

/**
 * This function will set the cookie categories in local storage
 * @param categories - array of cookie categories
 */
export const setCategoryStorage = (categories: CookieCategoryDefinition[]) => {
  localStorage.setItem(`${defaultCookiePrefix}categories`, JSON.stringify(categories));
};
