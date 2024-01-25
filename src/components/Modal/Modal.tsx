import React from "react";
import { Labels } from "../../types";
import "../../css/out/rct_style.css";
import { OutlineButton, PrimaryButton } from "../Buttons";

interface ModalProps {
  labels: Labels;
  primaryColor: string;
  showModal: boolean;
  toggleModal: () => void;
}

export const Modal = ({ labels, showModal, primaryColor, toggleModal }: ModalProps) => {
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
          "rct-modal-container rct-bg-white rct-w-11/12 md:rct-max-w-4xl rct-mx-auto rct-rounded " +
          "rct-shadow-lg rct-z-50 rct-overflow-y-auto"
        }
      >
        <div
          onClick={toggleModal}
          className={
            "modal-close rct-absolute rct-top-0 rct-right-0 rct-cursor-pointer rct-flex " +
            "rct-flex-col rct-items-center rct-mt-4 rct-mr-4 rct-text-white rct-text-sm rct-z-50"
          }
        >
          <svg
            className="rct-fill-current rct-text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47
            4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
          <span className="rct-text-sm">(Esc)</span>
        </div>

        <div className="modal-content rct-py-4 rct-text-left rct-px-6">
          <div className="rct-flex rct-justify-between rct-items-center rct-pb-3">
            <p className="rct-text-2xl rct-font-bold rct-text-black">Simple Modal!</p>
            <div className="modal-close rct-cursor-pointer rct-z-50" onClick={toggleModal}>
              <svg
                className="rct-fill-current rct-text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06
               1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </div>
          </div>

          <p>Modal content can go here</p>
          <p>{labels.main.title}</p>
          <p>...</p>

          <div className={"rct-flex rct-justify-end rct-pt-2"}>
            <OutlineButton primaryColor={primaryColor} text={labels.main.buttonDefault} clickFunction={toggleModal} paddingY={'1'}/>
            <PrimaryButton primaryColor={primaryColor} text={labels.main.buttonAllow} clickFunction={toggleModal}/>
          </div>
        </div>
      </div>
    </div>
  );
};
