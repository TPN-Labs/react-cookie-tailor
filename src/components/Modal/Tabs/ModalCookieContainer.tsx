import React from "react";
import { CookieCategoryDefinition, TailorColors, TailorCookie } from "../../../types";
import { groupBy } from "../../../utilities";

interface ModalCookieContainerProps {
  colors: TailorColors;
  cookies: TailorCookie[];
  type: CookieCategoryDefinition;
}

export const ModalCookieContainer = ({ colors, cookies, type }: ModalCookieContainerProps) => {
  const cookiesGroupedByDomain = groupBy(cookies, "domain");

  //console.log("keys")
  //console.log(cookiesGroupedByDomain.keys());
  return (
    <>
      <div className={"rct-p-4 rct-mt-3"} style={{ color: colors.black }}>
        <span>{type.title}&nbsp;</span>
        <span>({cookies.length})</span>
        <br />
        <br />
        <span>{type.description}</span>
      </div>
      <div className={"rct-border-solid rct-border-2 rct-rounded-lg rct-text-black"}>
        {Object.keys(cookiesGroupedByDomain).map((domain) => {
          const cookiesByDomain = cookiesGroupedByDomain.get(domain);
          return (
            <div key={`domain_${domain}`} className={"rct-p-4"}>
              <span>{domain}</span>
              <br />
              <br />
              {cookiesByDomain.map((cookie: TailorCookie) => {
                return (
                  <div key={`cookie_${cookie.title}`} className={"rct-p-4"}>
                    <span>{cookie.title}</span>
                    <br />
                    <br />
                    <span>{cookie.description}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
