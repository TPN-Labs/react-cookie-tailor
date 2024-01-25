# Changelog

> Original changelogs from the forked library [react-cookie-consent](https://github.com/Mastermindzh/react-cookie-consent) can be found [here](https://github.com/Mastermindzh/react-cookie-consent/blob/master/CHANGELOG.md)

> The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[0.8.0](https://github.com/TPN-Labs/react-cookie-tailor/releases/tag/0.8.0)]

This is the "official" release of the library.

### Added

- A random ID for the consent tracking. This is useful for processing the cookie request
in the backend. The ID is stored as a cookie with the name `rct_cookie_id`.
- Settings screen for controlling the cookies
- NPM badges in the README.md

### Updated

- to be continued...

### Removed

- to be continued...

## [[0.7.0](https://github.com/TPN-Labs/react-cookie-tailor/releases/tag/0.7.0)]

Our team was looking for a cookie consent solution that was easy to use and looked good. We will write here what was
added, changed, updated, and removed from the original library.

### Added

- Removed `@mui/material` dependency and replaced it with `tailwindcss` because mui was too heavy for our needs.
- Cookies categories
- A way to replace the translations

### Updated

- Bumped `size-limit` from `7.0.8` to `11.0.0`

### Removed

- By default, the library will appear at the bottom of the page. You can not change this behavior anymore.
