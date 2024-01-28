export type Label = {
  cookieCategory: CookieLabels;
  main: MainLabels;
  settings: SettingsLabels;
}

type SettingsAbout = {
  title: string;
  privacyPolicyLink: string;
  privacyPolicyTitle: string;
  cookiePolicyLink: string;
  cookiePolicyTitle: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
}

type SettingsHeaders = {
  about: SettingsAbout;
  consent: GeneralLabels;
  details: DetailsLabels;
}

type SettingsLabels = {
  title: string;
  description: string;
  headers: SettingsHeaders;
}

type DetailsLabels = {
  title: string;
  description: string;
  cookieType: string;
  cookieExpiration: string;
}

type CookieLabels = {
  mandatory: GeneralLabels;
  preferences: GeneralLabels;
  statistics: GeneralLabels;
  marketing: GeneralLabels;
  unclassified: GeneralLabels;
}

type MainLabels = {
  buttonAllow: string;
  buttonDefault: string;
  buttonClose: string;
  defaultId: string;
  defaultCreation: string;
  descriptionPrivacyLink: string;
  descriptionPrivacyTitle: string;
  descriptionStart: string;
  descriptionEnd: string;
  moreSettings: string;
  title: string;
}

type GeneralLabels = {
  description: string;
  title: string;
}
