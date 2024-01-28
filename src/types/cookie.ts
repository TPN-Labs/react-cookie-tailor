import { CookieCategory } from "./category";

export type TailorCookie =  {
  category: CookieCategory;
  description: string;
  domain: string;
  expiration: string;
  title: string;
  type: string;
}

export type TailorCookiesDetails = {
  categories: CookieCategory[];
  data: TailorCookie[];
}
