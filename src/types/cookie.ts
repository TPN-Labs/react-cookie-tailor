export interface TailorCookie {
  domain: string;
  title: string;
  description: string;
  expiration: string;
  type: string;
}

export interface TailorCookiesDetails {
  mandatory: TailorCookie[];
  marketing?: TailorCookie[];
  preferences?: TailorCookie[];
  statistics?: TailorCookie[];
  unclassified?: TailorCookie[];
}
