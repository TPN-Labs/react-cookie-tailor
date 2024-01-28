import FooterBar from "./Footer/FooterBar";
import { Label } from "../types/label";
import { TailorColors } from "../types/color";
import { TailorCookiesDetails } from "../types/cookie";
import { CookieCategoryDefinition } from "../types/category";
import FooterMain from "./Footer/FooterMain";
import FooterTrailing from "./Footer/FooterTrailing";
import Modal from "./Modal/Modal";
import "../css/out/rct_style.css";
import { useState } from "react";

type FooterTailorProps = {
  labels: Label;
  colors: TailorColors;
  cookies: TailorCookiesDetails;
  funcAccept: (categories: CookieCategoryDefinition[]) => void;
  funcDecline: () => void;
}

export default function FooterTailor({ labels, colors, cookies, funcAccept, funcDecline }: FooterTailorProps) {
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
};
