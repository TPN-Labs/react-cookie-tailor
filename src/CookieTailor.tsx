import Cookies from "js-cookie";
import React, { CSSProperties, useEffect, useState } from "react";
import { FooterTailor } from "./components/FooterTailor";
import { ConditionalWrapper } from "./components/ConditionalWrapper";
import { CookieTailorProps, defaultTailorProps } from "./CookieTailor.props";
import { defaultState } from "./CookieTailor.state";
import { CookieCategoryDefinition, SAME_SITE_OPTIONS, TailorResponse } from "./types";
import { getTailorCookieValue, getLegacyCookieName, generateUUIDv4 } from "./utilities";
import "./css/out/rct_style.css";
import {
  defaultCookiePrefix,
  getCategoryDefinition,
  getCategoryStorage,
  setCategoryStorage,
} from "./constants";

export const CookieTailor = (props: CookieTailorProps) => {
  const [visible, setVisible] = useState<boolean>(defaultState.visible);
  const state = defaultState;

  const {
    colors,
    cookieName,
    containerClasses,
    contentClasses,
    contentStyle,
    cookies,
    customContainerAttributes,
    customContentAttributes,
    disableStyles,
    labels,
    overlay,
    overlayClasses,
    overlayStyle,
    style,
  } = props;

  const tailorCookies = cookies || defaultTailorProps.cookies;
  const tailorColors = colors || defaultTailorProps.colors;
  const tailorLabels = labels || defaultTailorProps.labels;

  const runComponentMount = () => {
    const { debug } = props;

    // if cookie undefined or debug
    if (getCookieValue() === undefined || debug) {
      setVisible(true);
      // if acceptOnScroll is set to true and (cookie is undefined or debug is set to true), add a listener.
      if (props.acceptOnScroll) {
        window.addEventListener("scroll", handleScroll, { passive: true });
      }
    }
  };

  const runComponentUnmount = () => {
    removeScrollListener();
  };

  const removeScrollListener = () => {
    const { acceptOnScroll } = props;
    if (acceptOnScroll) {
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    runComponentMount();

    return () => {
      runComponentUnmount();
    };
  }, []);

  /**
   * Set a persistent accept cookie
   */
  const accept = (categories: CookieCategoryDefinition[]) => {
    const { cookieName, cookieValue, hideOnAccept, onAccept } = {
      ...defaultTailorProps,
      ...props,
    };

    setCookie(cookieName, cookieValue);

    const response: TailorResponse = {
      cookieId: getDefaultCookieId() || null,
      cookieCreation: getTailorCookieValue(`${defaultCookiePrefix}created`) || null,
      categories,
    };
    onAccept(response);

    if (hideOnAccept) {
      setVisible(false);
      removeScrollListener();
    }
  };

  /**
   * Handle a click on the overlay
   */
  const overlayClick = () => {
    const { acceptOnOverlayClick, onOverlayClick } = {
      ...defaultTailorProps,
      ...props,
    };
    if (acceptOnOverlayClick) {
      accept([]);
    }
    onOverlayClick();
  };

  /**
   * Set a persistent decline cookie
   */
  const decline = () => {
    const { cookieName, declineCookieValue, hideOnDecline, onDecline, setDeclineCookie } = {
      ...defaultTailorProps,
      ...props,
    };

    if (setDeclineCookie) {
      setCookie(cookieName, declineCookieValue);
    }

    onDecline();

    if (hideOnDecline) {
      setVisible(false);
    }
  };

  /**
   * Function to set the consent cookie based on the provided variables
   * Sets two cookies to handle incompatible browsers, more details:
   * https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
   */
  const setCookie = (cookieName: string, cookieValue: string | object) => {
    const { extraCookieOptions, expires, sameSite } = props;
    let { cookieSecurity } = props;

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
  };

  /**
   * Returns the value of the consent cookie
   * Retrieves the regular value first and if not found the legacy one according
   * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
   */
  const getCookieValue = () => {
    return getTailorCookieValue(cookieName);
  };

  /**
   * checks whether scroll has exceeded set amount and fire accept if so.
   */
  const handleScroll = () => {
    const { acceptOnScrollPercentage } = { ...defaultTailorProps, ...props };

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
      accept([]);
    }
  };

  const getDefaultCookieId = () => {
    const cookieName = `${defaultCookiePrefix}id`;
    return getTailorCookieValue(cookieName);
  };

  const createDefaultCookie = () => {
    if (!getDefaultCookieId()) {
      const randomId = generateUUIDv4();
      const cookieName = `${defaultCookiePrefix}id`;
      const cookieCreation = `${defaultCookiePrefix}created`;
      const createdDateAsString = new Date().toISOString();
      setCookie(cookieName, randomId);
      setCookie(cookieCreation, createdDateAsString);
    }
  };

  const createDefaultCategories = () => {
    const { cookiesCategories, labels } = props;
    const storageCategories = getCategoryStorage();
    if (!storageCategories) {
      const categories = cookiesCategories || defaultTailorProps.cookiesCategories;
      const tailorLabels = labels || defaultTailorProps.labels;
      const categoriesDefinition = categories.map((category, idx) => {
        return getCategoryDefinition(tailorLabels, idx, category);
      });
      setCategoryStorage(categoriesDefinition);
    }
  };

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
    myStyle = Object.assign({}, { ...state.style, ...style });
    myContentStyle = Object.assign({}, { ...state.contentStyle, ...contentStyle });
    myOverlayStyle = Object.assign({}, { ...state.overlayStyle, ...overlayStyle });
  }

  myStyle.backgroundColor = tailorColors.background;
  createDefaultCookie();
  createDefaultCategories();

  return (
    <ConditionalWrapper
      condition={overlay}
      wrapper={(children) => (
        <div
          style={myOverlayStyle}
          className={overlayClasses}
          onClick={() => {
            overlayClick();
          }}
        >
          {children}
        </div>
      )}
    >
      <div className={`${containerClasses}`} style={myStyle} {...customContainerAttributes}>
        <div style={myContentStyle} className={contentClasses} {...customContentAttributes}>
          <div
            className={"rct-container rct-place-self-center rct-p-4"}
            style={{ display: visible ? "block" : "none" }}
          >
            <FooterTailor
              labels={tailorLabels}
              cookies={tailorCookies}
              colors={tailorColors}
              funcAccept={accept}
              funcDecline={decline}
            />
          </div>
        </div>
      </div>
    </ConditionalWrapper>
  );
};

export default CookieTailor;
