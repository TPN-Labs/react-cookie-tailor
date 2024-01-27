import { TailorLabels } from "../types";

export const defaultLabels: TailorLabels = {
  cookieCategory: {
    mandatory: {
      title: "Mandatory",
      description:
        "Necessary cookies help you use a website by enabling basic functions such as page navigation and " +
        "access to secure areas of the website. The website cannot function properly without these cookies.",
    },
    preferences: {
      title: "Preferences",
      description:
        "Preference cookies allow a website to remember information that changes the way the site behaves " +
        "or looks, such as your preferred language or region.",
    },
    marketing: {
      title: "Marketing",
      description:
        "Marketing cookies are used to track visitors to various websites. The intention is to display" +
        "ads that are relevant and engaging to each individual user, making them more valuable to publishers" +
        "and third-party advertisers.",
    },
    statistics: {
      title: "Statistics",
      description:
        "Statistics cookies help site owners understand how visitors interact with sites by " +
        "collecting and reporting information anonymously.",
    },
    unclassified: {
      title: "Unclassified",
      description:
        "Unclassified cookies are cookies that we are in the process of classifying, together with " +
        "the providers of individual cookies.",
    },
  },
  main: {
    buttonAllow: "Allow all",
    buttonDefault: "Allow default",
    buttonClose: "Close",
    defaultId: "Client cookie identifier",
    defaultCreation: "Client cookie creation date",
    descriptionStart:
      "For purposes such as displaying personalized content, we use " +
      "cookies or similar technologies. By clicking Accept, you agree to allow " +
      "the collection of information through cookies or similar technologies. " +
      "Find out more about cookies, including the ability to withdraw your " +
      "consent, in the",
    descriptionPrivacyTitle: "Privacy Policy",
    descriptionPrivacyLink: "/privacy-policy",
    descriptionEnd: "section.",
    moreSettings: "More settings",
    title: "This website uses cookies",
  },
  settings: {
    title: "Cookie settings",
    description: "Manage your cookie preferences below.",
    headers: {
      about: {
        title: "About",
        privacyPolicyLink: "/privacy-policy",
        privacyPolicyTitle: "Privacy Policy",
        cookiePolicyLink: "/cookie-policy",
        cookiePolicyTitle: "Cookie Policy",
        description1:
          "Cookies are small text files that can be used by websites to make the user experience more efficient.",
        description2:
          "The law provides that we may store cookies on your device if they are strictly necessary " +
          "for the operation of this website. For all other types of cookies we need your permission. " +
          "This means that cookies that are classified as necessary are processed on the basis of " +
          "GDPR Art. 6 (1) (f). All other cookies, i.e. those in the preferences and marketing " +
          "categories, are processed on the basis of GDPR Art. 6 (1) (a) GDPR.",
        description3:
          "This site uses different types of cookies. Some cookies are placed by third " +
          "party services that appear on our pages.",
        description4: "You can at any time change or withdraw your consent from the",
        description5:
          "Find out more about who we are, how you can contact us and how we process personal data in our",
        description6:
          "Please indicate your consent ID and date when contacting us about your consent.",
      },
      consent: {
        title: "Consent",
        description: "This is an example of a cookie consent banner with more information.",
      },
      details: {
        title: "Details",
        description: "This is an example of a cookie consent banner with more information.",
      },
    },
  },
};
