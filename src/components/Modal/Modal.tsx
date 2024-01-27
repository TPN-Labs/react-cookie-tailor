import React from "react";
import { TailorLabels, TailorColors, TailorCookiesDetails } from "../../types";
import "../../css/out/rct_style.css";
import { OutlineButton } from "../Buttons";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";

interface ModalProps {
  labels: TailorLabels;
  colors: TailorColors;
  showModal: boolean;
  cookies: TailorCookiesDetails;
  toggleModal: () => void;
}

export const Modal = ({ labels, showModal, colors, toggleModal, cookies }: ModalProps) => {
  return (
    <div
      className={`rct-modal ${
        showModal ? "rct-opacity-100 rct-modal-active" : "rct-opacity-0 rct-pointer-events-none"
      }
        rct-fixed rct-w-full rct-h-full rct-top-0 rct-left-0 rct-flex rct-items-center justify-center`}
    >
      <div
        className={
          "rct-modal-overlay rct-absolute rct-w-full rct-h-full rct-bg-gray-900 rct-opacity-50"
        }
        onClick={toggleModal}
      />

      <div
        className={
          "rct-modal-container rct-w-11/12 md:rct-max-w-4xl rct-mx-auto rct-rounded " +
          "rct-shadow-lg rct-z-50 rct-overflow-y-auto"
        }
        style={{
          backgroundColor: colors.background,
        }}
      >
        <div className="modal-content rct-text-left">
          <ModalHeader toggleModal={toggleModal} labels={labels} colors={colors} />

          <ModalBody colors={colors} labels={labels} cookies={cookies} />

          <div className={"rct-flex rct-justify-end rct-py-2 rct-px-2"}>
            <OutlineButton
              colors={colors}
              text={labels.main.buttonClose}
              clickFunction={toggleModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
