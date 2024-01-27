export interface Label {
  cookieCategory: CookieLabels;
  main: MainLabels;
  settings: SettingsLabels;
}

interface SettingsAbout {
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

interface SettingsHeaders {
  about: SettingsAbout;
  consent: GeneralLabels;
  details: DetailsLabels;
}

interface SettingsLabels {
  title: string;
  description: string;
  headers: SettingsHeaders;
}

interface DetailsLabels {
  title: string;
  description: string;
  cookieType: string;
  cookieExpiration: string;
}

interface CookieLabels {
  mandatory: GeneralLabels;
  preferences: GeneralLabels;
  statistics: GeneralLabels;
  marketing: GeneralLabels;
  unclassified: GeneralLabels;
}

interface MainLabels {
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

interface GeneralLabels {
  description: string;
  title: string;
}
