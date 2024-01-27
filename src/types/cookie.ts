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

export interface TailorCookieProps {
  name: string;
  value: string;
  domain: string;
  path: string;
  expires: number;
  size: number;
  httpOnly: boolean;
  secure: boolean;
  sameSite: string;
  priority: string;
}
