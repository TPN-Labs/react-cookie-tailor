export enum CookieCategory {
  MANDATORY = "mandatory",
  MARKETING = "marketing",
  PREFERENCES = "preferences",
  STATISTICS = "statistics",
  UNCLASSIFIED = "unclassified",
}

export interface CookieCategoryDefinition {
  id: number;
  description: string;
  enabled: boolean;
  status: boolean;
  title: string;
  type: CookieCategory;
}
