import { CookieCategoryDefinition } from "./category";

export interface TailorResponse {
  cookieId: string | null;
  cookieCreation: string | null;
  categories: CookieCategoryDefinition[];
}
