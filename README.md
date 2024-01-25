# 👔 React Cookie Tailor

![Downloads](https://img.shields.io/npm/dm/react-cookie-tailor) ![Dependent repos (via libraries.io)](https://img.shields.io/librariesio/dependent-repos/npm/react-cookie-tailor) ![GitHub contributors](https://img.shields.io/github/contributors/TPN-Labs/react-cookie-tailor) ![Minified size](https://img.shields.io/bundlephobia/min/react-cookie-tailor) ![npm type definitions](https://img.shields.io/npm/types/react-cookie-tailor) ![license-mit](https://img.shields.io/badge/license-MIT-green)

> ℹ️ This is a fork of [react-cookie-consent](https://github.com/Mastermindzh/react-cookie-consent)

[![NPM](https://nodei.co/npm/react-cookie-tailor.png)](https://npmjs.org/package/react-cookie-tailor)

## 🖼️ Default look

![default look](https://raw.githubusercontent.com/TPN-Labs/react-cookie-tailor/main/images/default.png)

|                                                 Details                                                 | About |
|:-------------------------------------------------------------------------------------------------------:|:-------------------------: |
| ![about](https://raw.githubusercontent.com/TPN-Labs/react-cookie-tailor/main/images/modal_details.png)  |  ![about](https://raw.githubusercontent.com/TPN-Labs/react-cookie-tailor/main/images/modal_about.png) |


## 🎬 Demo

You can find a demo [here](https://tpn-labs.github.io/react-cookie-tailor/).

## 📦  Installation

```shell
npm install react-cookie-tailor
```

or use yarn:

```shell
yarn add react-cookie-tailor
```

## 📚 About

Our team was looking for a cookie consent solution that was easy to use and looked good. We initially found
another library, but it was not suitable for our needs.
More precisely, we wanted to comply with the GDPR and CPRA regulations, which require that the user must be able to
decline cookies.

To summarize what these regulations require, you need to:
- provide a compliant cookie policy
- display a cookie consent banner at the user's first visit
- store the proof of consent
- block non-exempt cookies before obtaining the user's consent
- release the cookies only after the user has given their consent

## 🔨 Using it

You can import the cookie bar like this:

```js
import { CookieTailor } from "react-cookie-tailor";
```

Then you can use the component anywhere in your React app like so:

```jsx
<CookieTailor/>
```

### 🌐 Translations

You can provide translations for the text using the `labels` property. By default, the library will use the English
translations. The default values can be found in [constants/defaultLabels.ts](https://github.com/TPN-Labs/react-cookie-tailor/blob/main/src/constants/defaultLabels.ts)

You can provide your own translations like so:

```js
const labels = {
  // ...
  main: {
    buttonAllow: "Allow all",
    buttonDefault: "Allow default",
    moreSettings: "More settings",
    title: "This website uses cookies"
  }
  // ...
};

<CookieTailor labels={labels}/>
```

### Just one color

At this moment, we use only one color for highlighting various elements such as buttons, links, etc.
You can change the color by using the `primaryColor` property. By default, the color is `#2B567D` (blue).

```js
<CookieTailor primaryColor="#2B567D"/>
```

### Providing your cookies details

You can provide your cookies details by using the `cookies` property. By default, the library will use the following
cookies:


### Cookie categories

By default, the library will use the following cookie categories:
- `MANDATORY` for cookies that are necessary for the website to function
- `MARKETING` for marketing cookies
- `PREFRENCES` for cookies that store user preferences
- `STATISTICS` for cookies that analyzes user statistics
- `UNCLASSIFIED` for cookies that do not fall into any of the above categories

You can enable/disable the categories by using the `categories` property. By default, all categories are enabled.

```js
const categories = [
  CookieCategory.MARKETING,
  CookieCategory.PREFRENCES,
  CookieCategory.STATISTICS,
  CookieCategory.UNCLASSIFIED,
];

<CookieTailor categories={categories}/>
```

### Getting the cookies value in your code

react-cookie-tailor exports a function called `getCookieConsentValue(cookieName: string)`. You can use it in your own code like so:

```js
import CookieTailor, { Cookies, getCookieConsentValue } from "react-cookie-tailor";

console.log(getCookieConsentValue("your_custom_cookie_name"));
```

### Reset the cookies value in your code

react-cookie-tailor exports a function called `resetCookieConsentValue`. You can use it in order to remove cookie in client-site:

```js
import CookieTailor, { Cookies, resetCookieConsentValue } from "react-cookie-tailor";

console.log(resetCookieConsentValue());
```


## 📝 Props

| Prop                          |                    Type                     | Default value                        | Description                                                                                                                             |
| ----------------------------- | :-----------------------------------------: | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| location                      |      string, "top", "bottom" or "none"      | "bottom"                             | Syntactic sugar to easily enable you to place the bar at the top or the bottom of the browser window. Use "none" to disable.            |
| visible                       | string, "show", "hidden" or "byCookieValue" | "byCookieValue"                      | Force the consent bar visibility. If "byCookieValue", visibility are defined by cookie consent existence.                               |
| children                      |          string or React component          |                                      | Content to appear inside the bar                                                                                                        |
| disableStyles                 |                   boolean                   | false                                | If enabled the component will have no default style. (you can still supply style through props)                                         |
| hideOnAccept                  |                   boolean                   | true                                 | If disabled the component will not hide it self after the accept button has been clicked. You will need to hide yourself (see onAccept) |
| buttonText                    |          string or React component          | "I understand"                       | Text to appear on the button                                                                                                            |
| declineButtonText             |          string or React component          | "I decline"                          | Text to appear on the decline button                                                                                                    |
| cookieName                    |                   string                    | "CookieConsent"                      | Name of the cookie used to track whether the user has agreed. Note that you also have to pass this to the `getCookieConsentValue` and `resetCookieConsentValue` functions as they default to "CookieConsent" as well.                                                                         |
| cookieValue                   |         string or boolean or number         | true                                 | Value to be saved under the cookieName.                                                                                                 |
| declineCookieValue            |         string or boolean or number         | false                                | Value to be saved under the cookieName when declined.                                                                                   |
| setDeclineCookie              |                   boolean                   | true                                 | Whether to set a cookie when the user clicks "decline"                                                                                  |
| onAccept                      |                  function                   | `() => {}`                           | Function to be called after the accept button has been clicked.                                                                         |
| onDecline                     |                  function                   | `() => {}`                           | Function to be called after the decline button has been clicked.                                                                        |
| debug                         |                   boolean                   | undefined                            | Bar will be drawn regardless of cookie for debugging purposes.                                                                          |
| expires                       |                   number                    | 365                                  | Number of days before the cookie expires.                                                                                               |
| extraCookieOptions            |                   object                    | `{}`                                 | Extra info (apart from expiry date) to add to the cookie                                                                                |
| overlay                       |                   boolean                   | false                                | Whether to show a page obscuring overlay or not.                                                                                        |
| containerClasses              |                   string                    | ""                                   | CSS classes to apply to the surrounding container                                                                                       |
| buttonClasses                 |                   string                    | ""                                   | CSS classes to apply to the button                                                                                                      |
| buttonWrapperClasses          |                   string                    | ""                                   | CSS classes to apply to the div wrapping the buttons                                                                                    |
| customButtonWrapperAttributes |   `React.HTMLAttributes<HTMLDivElement>`    | `{}`                                 | Allows you to set custom (data) attributes on the button wrapper div                                                                    |
| declineButtonClasses          |                   string                    | ""                                   | CSS classes to apply to the decline button                                                                                              |
| buttonId                      |                   string                    | ""                                   | Id to apply to the button                                                                                                               |
| declineButtonId               |                   string                    | ""                                   | Id to apply to the decline button                                                                                                       |
| contentClasses                |                   string                    | ""                                   | CSS classes to apply to the content                                                                                                     |
| overlayClasses                |                   string                    | ""                                   | CSS classes to apply to the surrounding overlay                                                                                         |
| disableButtonStyles           |                   boolean                   | false                                | If enabled the button will have no default style. (you can still supply style through props)                                            |
| enableDeclineButton           |                   boolean                   | false                                | If enabled the decline button will be rendered                                                                                          |
| flipButtons                   |                   boolean                   | false                                | If enabled the accept and decline buttons will be flipped                                                                               |
| ButtonComponent               |               React component               | button                               | React Component to render as a button.                                                                                                  |
| sameSite                      |      string, "strict", "lax" or "none"      | none                                 | Cookies sameSite attribute value                                                                                                        |
| cookieSecurity                |                   boolean                   | undefined                            | Cookie security level. Defaults to true unless running on http.                                                                         |
| ariaAcceptLabel               |                   string                    | Accept cookies                       | Aria label to set on the accept button                                                                                                  |
| ariaDeclineLabel              |                   string                    | Decline cookies                      | Aria label to set on the decline button                                                                                                 |
| acceptOnScroll                |                   boolean                   | false                                | Defines whether "accept" should be fired after the user scrolls a certain distance (see acceptOnScrollPercentage)                       |
| acceptOnScrollPercentage      |                   number                    | 25                                   | Percentage of the page height the user has to scroll to trigger the accept function if acceptOnScroll is enabled                        |
| customContentAttributes       |                   object                    | `{}`                                 | Allows you to set custom (data) attributes on the content div                                                                           |
| customContainerAttributes     |                   object                    | `{}`                                 | Allows you to set custom (data) attributes on the container div                                                                         |
| onOverlayClick                |                  function                   | `() => {}`                           | allows you to react to a click on the overlay                                                                                           |
| acceptOnOverlayClick          |                   boolean                   | false                                | Determines whether the cookies should be accepted after clicking on the overlay                                                         |
| customButtonProps             |                   object                    | `{}`                                 | Allows you to set custom props on the button component                                                                                  |
| customDeclineButtonProps      |                   object                    | `{}`                                 | Allows you to set custom props on the decline button component                                                                          |


## 🐞 Debugging it

Because the cookie consent bar will be hidden once accepted, you will have to set the prop `debug={true}` to evaluate styling changes:

```js
<CookieConsent debug={true}></CookieConsent>
```

## ❔Questions

### Why are there two cookies? One of which named "Legacy"

The short story is that some browsers don't support the SameSite=None attribute.
The modern browsers force you to have SameSite set to something other than none.

So react-cookie-tailor fixes this like so:

- set the fallback cookie (e.g -legacy) first, this will always succeed (on all browsers)
- set the correct cookie second (this will work on modern browsers, fail on older ones)

When checking the cookie it'll do it in reverse. If the regular cookie exists, it'll use that. If no regular cookie exists it'll check whether the legacy cookie exists. If both are non-existent no consent was given.

The long story can be found here: [#PR 68](https://github.com/Mastermindzh/react-cookie-consent/pull/68)


## 💻 Contributor information

When making a PR please think about the following things:

- Update the ChangeLog (or include what you did in the PR and I'll add it, up to you)
- No need to build or update the package.json. I will do both on release.
- Please don't change code convention / style
