import { CookieCategory } from "./category";

export interface TailorCookie {
  category: CookieCategory;
  description: string;
  domain: string;
  expiration: string;
  title: string;
  type: string;
}

export interface TailorCookiesDetails {
  categories: CookieCategory[];
  data: TailorCookie[];
}
