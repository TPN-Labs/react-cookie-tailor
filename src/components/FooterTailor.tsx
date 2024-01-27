import React from "react";
import { TailorLabels, TailorColors, TailorCookiesDetails } from "../types";
import { FooterBar, FooterMain, FooterTrailing } from "./Footer";
import "../css/out/rct_style.css";
import { Modal } from "./Modal";

interface FooterTailorProps {
  labels: TailorLabels;
  colors: TailorColors;
  cookies: TailorCookiesDetails;
  funcAccept: () => void;
  funcDecline: () => void;
}

const FooterTailor = ({ labels, colors, cookies, funcAccept, funcDecline }: FooterTailorProps) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(true);

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
};

export default FooterTailor;
