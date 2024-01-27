import React from "react";
import { CookieCategoryDefinition, TailorColors, TailorCookie, Label } from "../../../types";
import { groupBy } from "../../../utilities";

interface ModalCookieContainerProps {
  colors: TailorColors;
  cookies: TailorCookie[];
  labels: Label;
  type: CookieCategoryDefinition;
}

export const ModalCookieContainer = ({
  colors,
  cookies,
  labels,
  type,
}: ModalCookieContainerProps) => {
  const cookiesGroupedByDomain = groupBy(cookies, "domain");
  const domainKeys = [...cookiesGroupedByDomain.keys()];

  return (
    <>
      <div className={"rct-font-sans rct-p-2"} style={{ color: colors.black }}>
        <span className={"rct-font-bold"}>
          {type.title}&nbsp;({cookies.length})
        </span>
        <br />
        <br />
        <span>{type.description}</span>
        <br />
        <br />
      </div>
      <div
        className={"rct-font-sans rct-border-solid rct-rounded-lg"}
        style={{ color: colors.black, borderColor: colors.black, borderWidth: "1px" }}
      >
        {domainKeys.map((domain) => {
          const cookiesByDomain = cookiesGroupedByDomain.get(domain);
          return (
            <div key={`domain_${domain}`} className={"rct-p-2"}>
              <span className={"rct-font-bold"}>
                {domain} ({cookiesByDomain.length})
              </span>
              <hr />
              {cookiesByDomain.map((cookie: TailorCookie) => {
                return (
                  <div
                    className={"rct-border-solid rct-border-2 rct-rounded-lg rct-my-2"}
                    style={{ color: colors.black, borderColor: colors.black }}
                    key={`cookie_${cookie.title}`}
                  >
                    <div key={`cookie_${cookie.title}`} className={"rct-p-4"}>
                      <span className={"rct-font-bold"}>{cookie.title}</span>
                      <br />
                      <br />
                      <span>{cookie.description}</span>
                      <hr />
                      <span className={"rct-font-bold"}>
                        {labels.settings.headers.details.cookieType}:{" "}
                      </span>
                      <span>{cookie.type}</span>
                      <br />
                      <span className={"rct-font-bold"}>
                        {labels.settings.headers.details.cookieExpiration}:{" "}
                      </span>
                      <span>{cookie.expiration}</span>
                    </div>
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
