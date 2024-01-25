export interface Labels {
  cookieCategory: CookieLabels;
  main: MainLabels;
  settings: SettingsLabels;
}

interface SettingsHeaders {
  about: GeneralLabels;
  consent: GeneralLabels;
  details: GeneralLabels;
}

interface SettingsLabels {
  title: string;
  description: string;
  headers: SettingsHeaders;
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
