import React from "react";
// @ts-ignore
import { Intro } from "./intro";
import { Story } from "@storybook/react";
import CookieTailor, { TailorResponse } from "../../src";

export const DefaultTemplate: Story<any> = () => {
  const acceptFunction = (response: TailorResponse) => {
    console.log("Accept function called");
    console.log(response.cookieId);
    console.log(response.cookieCreation);
    console.log(response.categories);
  };

  return (
    <>
      <Intro />
      <CookieTailor debug={true} onAccept={acceptFunction} />
    </>
  );
};
