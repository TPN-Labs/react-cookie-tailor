import { CookieCategory, Labels } from "../types";

export const getCategoryTitleAndDescription = (labels: Labels, category: CookieCategory) => {
  switch (category) {
    case CookieCategory.MANDATORY:
      return {
        title: labels.cookieCategory.mandatory.title,
        description: labels.cookieCategory.mandatory.description,
      };
    case CookieCategory.PREFRENCES:
      return {
        title: labels.cookieCategory.preferences.title,
        description: labels.cookieCategory.preferences.description,
      };
    case CookieCategory.STATISTICS:
      return {
        title: labels.cookieCategory.statistics.title,
        description: labels.cookieCategory.statistics.description,
      };
    case CookieCategory.MARKETING:
      return {
        title: labels.cookieCategory.marketing.title,
        description: labels.cookieCategory.marketing.description,
      };
    default:
      return {
        title: labels.cookieCategory.unclassified.title,
        description: labels.cookieCategory.unclassified.description,
      };
  }
};
