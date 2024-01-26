import Cookies from "js-cookie";
import { ConditionalWrapper } from "./components/ConditionalWrapper";
import { CookieTailor } from "./CookieTailor";
import { VISIBILITY_OPTIONS } from "./types";

export * from "./types";
export * from "./utilities";
export { Cookies, CookieTailor, ConditionalWrapper };
// backwards compatibility exports
export { VISIBILITY_OPTIONS as VISIBLE_OPTIONS };

export default CookieTailor;
