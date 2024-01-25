import React from "react";

interface ModalContainerCloseProps {
  toggleModal: () => void;
}

export const ModalContainerClose = ({ toggleModal }: ModalContainerCloseProps) => {
  return (
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
  );
};
