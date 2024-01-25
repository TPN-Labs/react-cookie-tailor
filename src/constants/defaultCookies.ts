import { TailorCookiesDetails } from "../types";

export const defaultCookies: TailorCookiesDetails = {
  mandatory: [
    {
      title: "Mandatory Cookie",
      description: "This is a mandatory cookie.",
      expiration: "1 year",
      type: "mandatory",
    },
    {
      title: "Mandatory Cookie 2",
      description: "This is a mandatory cookie.",
      expiration: "Session",
      type: "pixel",
    },
  ],
  marketing: [
    {
      title: "Marketing Cookie",
      description: "This is a marketing cookie.",
      expiration: "1 year",
      type: "marketing",
    },
  ],
  preferences: [
    {
      title: "Preferences Cookie",
      description: "This is a preferences cookie.",
      expiration: "1 year",
      type: "preferences",
    },
    {
      title: "Preferences Cookie 2",
      description: "This is a preferences cookie.",
      expiration: "Session",
      type: "pixel",
    },
    {
      title: "Preferences Cookie 3",
      description: "This is a preferences cookie.",
      expiration: "Session",
      type: "pixel",
    },
    {
      title: "Preferences Cookie 4",
      description: "This is a preferences cookie.",
      expiration: "Session",
      type: "pixel",
    },
  ],
  statistics: [
    {
      title: "Statistics Cookie",
      description: "This is a statistics cookie.",
      expiration: "1 year",
      type: "statistics",
    },
  ],
  unclassified: [
    {
      title: "Unclassified Cookie",
      description: "This is an unclassified cookie.",
      expiration: "1 year",
      type: "unclassified",
    },
  ],
};
