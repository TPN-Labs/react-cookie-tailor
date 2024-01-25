import React from "react";
import { Labels } from "../../types";

interface ModalHeaderProps {
  labels: Labels;
  primaryColor: string;
  toggleModal: () => void;
}

export const ModalHeader = ({ labels, toggleModal, primaryColor }: ModalHeaderProps) => {
  return (
    <div
      className={"rct-flex rct-justify-between rct-items-center"}
      style={{ backgroundColor: primaryColor }}
    >
      <span
        className={
          "rct-text-lg rct-font-bold rct-text-black rct-py-2 " +
          "rct-px-6 rct-uppercase rct-text-white rct-tracking-wider rct-font-sans"
        }
      >
        {labels.settings.title}
      </span>
      <div className={"modal-close rct-cursor-pointer rct-z-50"} onClick={toggleModal}>
        <svg
          className="rct-fill-current rct-text-black rct-mr-2 rct-text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 18 18"
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
