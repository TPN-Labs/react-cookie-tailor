import React from "react";
import { Label, TailorColors } from "../../types";

interface ModalHeaderProps {
  labels: Label;
  colors: TailorColors;
  toggleModal: () => void;
}

export const ModalHeader = ({ labels, toggleModal, colors }: ModalHeaderProps) => {
  return (
    <div
      className={"rct-flex rct-justify-between rct-items-center"}
      style={{ backgroundColor: colors.primary }}
    >
      <span
        className={
          "rct-text-lg rct-font-bold rct-py-2 rct-px-6 rct-uppercase rct-tracking-wider rct-font-sans"
        }
        style={{ color: colors.background }}
      >
        {labels.settings.title}
      </span>
      <div className={"modal-close rct-cursor-pointer rct-z-50"} onClick={toggleModal}>
        <svg
          className="rct-fill-current rct-text-black rct-mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 18 18"
          style={{ color: colors.background }}
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06
               1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
