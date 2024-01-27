import { TailorCookiesDetails } from "../types";

export const defaultCookies: TailorCookiesDetails = {
  mandatory: [
    {
      domain: "tpn-labs.com",
      title: "rct_cookie_consent",
      description: "This is a mandatory cookie that stores the user's cookie consent preferences.",
      expiration: "1 year",
      type: "HTTP",
    },
    {
      domain: "tpn-labs.com",
      title: "tpn_cookie",
      description: "This cookie is used to check if the user has accepted the cookie consent.",
      expiration: "Session",
      type: "HTTP",
    },
  ],
  marketing: [
    {
      domain: "Google",
      title: "IDE",
      description:
        "Used by Google DoubleClick to register and report the website user's actions after viewing or clicking " +
        "one of the advertiser's ads with the purpose of measuring the efficacy of an ad and to " +
        "present targeted ads to the user.",
      expiration: "1 year",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "test_cookie",
      description: "Used to check if the user's browser supports cookies.",
      expiration: "Session",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "NID",
      description:
        "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.",
      expiration: "6 months",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "1P_JAR",
      description:
        "These cookies are used statistics and track conversion rates and Google ad personalisation.",
      expiration: "1 month",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "ANID",
      description:
        "These cookies are used to collect anonymous website statistics and track conversion rates.",
      expiration: "1 year",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "CONSENT",
      description:
        "Google cookie. Airship uses this cookie to track the user's consent preferences.",
      expiration: "20 years",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "DV",
      description:
        "Google cookie. By using this cookie, Google is able to make the ads more attractive to users and more ",
      expiration: "1 day",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "HSID",
      description:
        "Google cookie. Google uses this cookie to track the user's consent preferences.",
      expiration: "2 years",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "SAPISID",
      description: "Google cookie. Protects user data from unauthorized access.",
      expiration: "2 years",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "SID",
      description:
        "Google cookie. Security cookie to protect a user's data from unauthorized access.",
      expiration: "2 years",
      type: "HTTP",
    },
    {
      domain: "Google",
      title: "SIDCC",
      description:
        "Google cookie. Cookie is used to protect the user data from unauthorized access.",
      expiration: "3 months",
      type: "HTTP",
    },
    {
      domain: "tpn-labs.com",
      title: "marketing_cookie",
      description: "This is a marketing cookie.",
      expiration: "Session",
      type: "HTTP",
    },
    {
      domain: "tpn-labs.com",
      title: "marketing_cookie_2",
      description: "This is a marketing cookie.",
      expiration: "Session",
      type: "HTTP",
    },
  ],
  preferences: [
    {
      domain: "tpn-labs.com",
      title: "Preferences Cookie",
      description: "This is a preferences cookie. 1",
      expiration: "1 year",
      type: "preferences",
    },
    {
      domain: "tpn-labs.com",
      title: "Preferences Cookie 2",
      description: "This is a preferences cookie. 2",
      expiration: "Session",
      type: "pixel",
    },
    {
      domain: "tpn-labs.com",
      title: "Preferences Cookie 3",
      description: "This is a preferences cookie. 3",
      expiration: "Session",
      type: "pixel",
    },
    {
      domain: "tpn-labs.com4",
      title: "Preferences Cookie 4",
      description: "This is a preferences cookie. 4",
      expiration: "Session",
      type: "pixel",
    },
  ],
  statistics: [
    {
      domain: "tpn-labs.com5",
      title: "Statistics Cookie",
      description: "This is a statistics cookie. 5",
      expiration: "1 year",
      type: "statistics",
    },
  ],
  unclassified: [
    {
      domain: "tpn-labs.com",
      title: "Unclassified Cookie",
      description: "This is an unclassified cookie. 6",
      expiration: "1 year",
      type: "unclassified",
    },
  ],
};
