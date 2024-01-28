import { useState } from "react";
import {
  CookieCategoryDefinition,
  Label,
  TailorColors,
  TailorCookiesDetails,
} from "../types";
import { FooterBar, FooterMain, FooterTrailing } from "./Footer";
import "../css/out/rct_style.css";
import { Modal } from "./Modal";
import React from "react";

type FooterTailorProps = {
  labels: Label;
  colors: TailorColors;
  cookies: TailorCookiesDetails;
  funcAccept: (categories: CookieCategoryDefinition[]) => void;
  funcDecline: () => void;
};

function FooterTailor({
  labels,
  colors,
  cookies,
  funcAccept,
  funcDecline,
}: FooterTailorProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Modal
        labels={labels}
        showModal={modalOpen}
        colors={colors}
        cookies={cookies}
        toggleModal={() => {
          setModalOpen(!modalOpen);
        }}
      />

      <div className={"rct-flex rct-flex-row"}>
        <div className={"rct-basis-full md:rct-basis-9/12"}>
          <FooterMain labels={labels} colors={colors} />
        </div>
        <div className={"rct-basis-full md:rct-basis-3/12"}>
          <FooterTrailing
            labels={labels}
            funcAccept={funcAccept}
            funcDecline={funcDecline}
            colors={colors}
          />
        </div>
      </div>
      <hr />
      <FooterBar
        labels={labels}
        colors={colors}
        toggleModal={() => {
          setModalOpen(!modalOpen);
        }}
      />
    </div>
  );
}

export default FooterTailor;
