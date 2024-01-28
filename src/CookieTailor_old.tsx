/*import Cookies from "js-cookie";
import React, { Component, CSSProperties } from "react";
import FooterTailor from "./components/FooterTailor";
import { ConditionalWrapper } from "./components/ConditionalWrapper";
import { CookieTailorProps, defaultTailorProps } from "./CookieTailor.props";
import { CookieTailorState, defaultState } from "./CookieTailor.state";
import {
  CookieCategoryDefinition,
  SAME_SITE_OPTIONS,
  TailorResponse,
  VISIBILITY_OPTIONS,
} from "./types";
import { getTailorCookieValue, getLegacyCookieName, generateUUIDv4 } from "./utilities";
import "./css/out/rct_style.css";
import { defaultCookiePrefix } from "./constants";
import { CategoryProvider } from "./hooks";

export class CookieTailorOld extends Component<CookieTailorProps, CookieTailorState> {
  public static defaultProps = defaultTailorProps;

  state: CookieTailorState = defaultState;

  componentDidMount() {
    const { debug } = this.props;

    // if cookie undefined or debug
    if (this.getCookieValue() === undefined || debug) {
      this.setState({ visible: true });
      // if acceptOnScroll is set to true and (cookie is undefined or debug is set to true), add a listener.
      if (this.props.acceptOnScroll) {
        window.addEventListener("scroll", this.handleScroll, { passive: true });
      }
    }
  }

  componentWillUnmount() {
    // remove listener if still set
    this.removeScrollListener();
  }

  accept = (categories: CookieCategoryDefinition[]) => {
    const { cookieName, cookieValue, hideOnAccept, onAccept } = {
      ...defaultTailorProps,
      ...this.props,
    };

    this.setCookie(cookieName, cookieValue);

    const response: TailorResponse = {
      cookieId: this.getDefaultCookieId() || null,
      cookieCreation: getTailorCookieValue(`${defaultCookiePrefix}created`) || null,
      categories,
    };
    onAccept(response);

    if (hideOnAccept) {
      this.setState({ visible: false });
      this.removeScrollListener();
    }
  };

  overlayClick() {
    const { acceptOnOverlayClick, onOverlayClick } = {
      ...defaultTailorProps,
      ...this.props,
    };
    if (acceptOnOverlayClick) {
      this.accept([]);
    }
    onOverlayClick();
  }

  decline = () => {
    const { cookieName, declineCookieValue, hideOnDecline, onDecline, setDeclineCookie } = {
      ...defaultTailorProps,
      ...this.props,
    };

    if (setDeclineCookie) {
      this.setCookie(cookieName, declineCookieValue);
    }

    onDecline();

    if (hideOnDecline) {
      this.setState({ visible: false });
    }
  };

  setCookie(cookieName: string, cookieValue: string | object) {
    const { extraCookieOptions, expires, sameSite } = this.props;
    let { cookieSecurity } = this.props;

    if (cookieSecurity === undefined) {
      cookieSecurity = window.location ? window.location.protocol === "https:" : true;
    }

    const cookieOptions = { expires, ...extraCookieOptions, sameSite, secure: cookieSecurity };

    // Fallback for older browsers where can not set SameSite=None,
    // SEE: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
    if (sameSite === SAME_SITE_OPTIONS.NONE) {
      Cookies.set(getLegacyCookieName(cookieName), cookieValue, cookieOptions);
    }

    // set the regular cookie
    Cookies.set(cookieName, cookieValue, cookieOptions);
  }

  getCookieValue() {
    const { cookieName } = this.props;
    return getTailorCookieValue(cookieName);
  }

  handleScroll = () => {
    const { acceptOnScrollPercentage } = { ...defaultTailorProps, ...this.props };

    // (top / height) - height * 100
    const rootNode = document.documentElement;
    const body = document.body;
    const top = "scrollTop";
    const height = "scrollHeight";

    const percentage =
      ((rootNode[top] || body[top]) /
        ((rootNode[height] || body[height]) - rootNode.clientHeight)) *
      100;

    if (percentage > acceptOnScrollPercentage) {
      this.accept([]);
    }
  };

  removeScrollListener = () => {
    const { acceptOnScroll } = this.props;
    if (acceptOnScroll) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

  getDefaultCookieId = () => {
    const cookieName = `${defaultCookiePrefix}id`;
    return getTailorCookieValue(cookieName);
  };

  createDefaultCookie = () => {
    if (!this.getDefaultCookieId()) {
      const randomId = generateUUIDv4();
      const cookieName = `${defaultCookiePrefix}id`;
      const cookieCreation = `${defaultCookiePrefix}created`;
      const createdDateAsString = new Date().toISOString();
      this.setCookie(cookieName, randomId);
      this.setCookie(cookieCreation, createdDateAsString);
    }
  };

  render() {
    // If the bar shouldn't be visible don't render anything.
    switch (this.props.visible) {
      case VISIBILITY_OPTIONS.HIDDEN:
        return null;
      case VISIBILITY_OPTIONS.BY_COOKIE_VALUE:
        if (!this.state.visible) {
          return null;
        }
        break;
      default:
        break;
    }

    const {
      colors,
      containerClasses,
      contentClasses,
      contentStyle,
      cookies,
      cookiesCategories,
      customContainerAttributes,
      customContentAttributes,
      disableStyles,
      labels,
      overlay,
      overlayClasses,
      overlayStyle,
      style,
    } = this.props;

    const tailorCookies = cookies || defaultTailorProps.cookies;
    const tailorColors = colors || defaultTailorProps.colors;
    const tailorCategories = cookiesCategories || defaultTailorProps.cookiesCategories;
    const tailorLabels = labels || defaultTailorProps.labels;

    let myStyle: CSSProperties;
    let myContentStyle: CSSProperties;
    let myOverlayStyle: CSSProperties = {};

    if (disableStyles) {
      // if styles are disabled use the provided styles (or none)
      myStyle = Object.assign({}, style);
      myContentStyle = Object.assign({}, contentStyle);
      myOverlayStyle = Object.assign({}, overlayStyle);
    } else {
      // if styles aren't disabled merge them with the styles that are provided (or use default styles)
      myStyle = Object.assign({}, { ...this.state.style, ...style });
      myContentStyle = Object.assign({}, { ...this.state.contentStyle, ...contentStyle });
      myOverlayStyle = Object.assign({}, { ...this.state.overlayStyle, ...overlayStyle });
    }

    myStyle.backgroundColor = tailorColors.background;
    this.createDefaultCookie();
    return (
      <ConditionalWrapper
        condition={overlay}
        wrapper={(children) => (
          <div
            style={myOverlayStyle}
            className={overlayClasses}
            onClick={() => {
              this.overlayClick();
            }}
          >
            {children}
          </div>
        )}
      >
        <div className={`${containerClasses}`} style={myStyle} {...customContainerAttributes}>
          <div style={myContentStyle} className={contentClasses} {...customContentAttributes}>
            <div className={"rct-container rct-place-self-center rct-p-4"}>
              <CategoryProvider labels={tailorLabels} categories={tailorCategories}>
                <FooterTailor
                  labels={tailorLabels}
                  cookies={tailorCookies}
                  colors={tailorColors}
                  funcAccept={this.accept}
                  funcDecline={this.decline}
                />
              </CategoryProvider>
            </div>
          </div>
        </div>
      </ConditionalWrapper>
    );
  }
}

export default CookieTailorOld;
*/
