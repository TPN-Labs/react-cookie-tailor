import React from "react";
import { CookieCategory, Labels } from "../types";
import { FooterBar, FooterMain, FooterTrailing } from "./Footer";
import "../css/out/rct_style.css";
import { Modal } from "./Modal";

interface FooterTailorProps {
  labels: Labels;
  categories: CookieCategory[];
  primaryColor: string;
  funcAccept: () => void;
  funcDecline: () => void;
}

const FooterTailor = ({
  labels,
  categories,
  primaryColor,
  funcAccept,
  funcDecline,
}: FooterTailorProps) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(true);

  return (
    <div>
      <Modal
        labels={labels}
        showModal={modalOpen}
        primaryColor={primaryColor}
        toggleModal={() => {
          setModalOpen(!modalOpen);
        }}
      />

      <div className={"rct-flex rct-flex-row"}>
        <div className={"rct-basis-full md:rct-basis-9/12"}>
          <FooterMain labels={labels} primaryColor={primaryColor} />
        </div>
        <div className={"rct-basis-full md:rct-basis-3/12"}>
          <FooterTrailing
            labels={labels}
            funcAccept={funcAccept}
            funcDecline={funcDecline}
            primaryColor={primaryColor}
          />
        </div>
      </div>
      <hr />
      <FooterBar
        labels={labels}
        categories={categories}
        primaryColor={primaryColor}
        toggleModal={() => {
          setModalOpen(!modalOpen);
        }}
      />
    </div>
  );
};

export default FooterTailor;
