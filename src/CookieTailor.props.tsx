import { FunctionComponent, ReactNode } from "react";
import { TailorColors } from "./types/color";
import { TailorCookiesDetails } from "./types/cookie";
import { Label } from "./types/label";
import { TailorResponse } from "./types/response";
import { VISIBILITY_OPTIONS } from "./types/visibilityOptions";
import { CookieCategory } from "./types/category";
import { defaultColors } from "./constants/defaultColors";
import { defaultCookies } from "./constants/defaultCookies";
import { defaultCookieName } from "./constants/defaultCookieName";
import { defaultLabels } from "./constants/defaultLabels";

export type CookieTailorProps = {
  ButtonComponent?: any;
  acceptOnOverlayClick?: boolean;
  acceptOnScroll?: boolean;
  acceptOnScrollPercentage?: number;
  ariaAcceptLabel?: string;
  ariaDeclineLabel?: string;
  buttonClasses?: string;
  buttonId?: string;
  buttonStyle?: React.CSSProperties;
  buttonText?: string | ReactNode | Function;
  buttonWrapperClasses?: string;
  children?: ReactNode;
  colors?: TailorColors;
  cookies?: TailorCookiesDetails;
  containerClasses?: string;
  contentClasses?: string;
  contentStyle?: React.CSSProperties;
  cookieName?: string;
  cookieSecurity?: boolean;
  cookieValue?: string | object;
  cookiesCategories?: CookieCategory[];
  customButtonProps?: Object;
  customButtonWrapperAttributes?: Object;
  customContainerAttributes?: Object;
  customContentAttributes?: Object;
  customDeclineButtonProps?: Object;
  debug?: boolean;
  declineButtonClasses?: string;
  declineButtonId?: string;
  declineButtonStyle?: React.CSSProperties;
  declineButtonText?: string | ReactNode | Function;
  declineCookieValue?: string | object;
  disableButtonStyles?: boolean;
  disableStyles?: boolean;
  enableDeclineButton?: boolean;
  expires?: number;
  extraCookieOptions?: Object;
  flipButtons?: boolean;
  hideOnAccept?: boolean;
  hideOnDecline?: boolean;
  labels?: Label;
  location?: string;
  primaryColor?: string;
  onAccept?: (response: TailorResponse) => void;
  onDecline?: () => void;
  onOverlayClick?: () => void;
  overlay?: boolean;
  overlayClasses?: string;
  overlayStyle?: Object;
  sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None";
  setDeclineCookie?: boolean;
  style?: React.CSSProperties;
  visible?: string;
}

const DefaultButtonComponent: FunctionComponent<{ children: ReactNode; [x: string]: any }> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

export const defaultTailorProps = {
  ButtonComponent: DefaultButtonComponent,
  acceptOnOverlayClick: false,
  acceptOnScroll: false,
  acceptOnScrollPercentage: 25,
  ariaAcceptLabel: "Accept cookies",
  ariaDeclineLabel: "Decline cookies",
  colors: defaultColors,
  containerClasses: "CookieTailor",
  contentClasses: "",
  contentStyle: {},
  cookies: defaultCookies,
  cookieName: defaultCookieName,
  cookieValue: "true",
  cookiesCategories: [
    CookieCategory.PREFERENCES,
    CookieCategory.STATISTICS,
    CookieCategory.MARKETING,
  ],
  customContainerAttributes: {},
  customContentAttributes: {},
  customDeclineButtonProps: {},
  debug: false,
  declineCookieValue: "false",
  disableButtonStyles: false,
  disableStyles: false,
  enableDeclineButton: false,
  expires: 365,
  extraCookieOptions: {},
  flipButtons: false,
  hideOnAccept: true,
  hideOnDecline: true,
  labels: defaultLabels,
  onAccept: (_response: TailorResponse) => {},
  onDecline: () => {},
  onOverlayClick: () => {},
  overlay: false,
  overlayClasses: "",
  overlayStyle: {},
  setDeclineCookie: true,
  style: {},
  visible: VISIBILITY_OPTIONS.BY_COOKIE_VALUE,
};
