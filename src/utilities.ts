import Cookies from "js-cookie";
import { defaultCookieName } from "./constants/defaultCookieName";

/**
 * Returns a UUIDv4
 * @returns {string} UUIDv4
 */
export const generateUUIDv4 = (): string => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
};

/**
 * Returns the value of the consent cookie
 * Retrieves the regular value first and if not found the legacy one according
 * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 * @param {*} name optional name of the cookie
 */
export const getTailorCookieValue = (name: string = defaultCookieName) => {
  const cookieValue = Cookies.get(name);

  // if the cookieValue is undefined check for the legacy cookie
  if (cookieValue === undefined) {
    return Cookies.get(getLegacyCookieName(name));
  }
  return cookieValue;
};

/**
 * Reset the consent cookie
 * Remove the cookie on browser in order to allow user to change their consent
 * @param {*} name optional name of the cookie
 */
export const resetCookieTailorValue = (name: string = defaultCookieName) => {
  Cookies.remove(name);
};

/**
 * Get the legacy cookie name by the regular cookie name
 * @param {string} name of cookie to get
 */
export const getLegacyCookieName = (name: string) => {
  return `${name}-legacy`;
};

export const groupBy = (list: any[], groupKey: any) => {
  const map = new Map();
  list.forEach((item) => {
    const key = item[groupKey];
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};
