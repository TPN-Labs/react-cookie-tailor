import React from "react";
import { Labels } from "../../../types";

interface ModalAboutTabProps {
  labels: Labels;
}

export const ModalAboutTab = ({ labels }: ModalAboutTabProps) => {
  return <div>About {labels.settings.title}</div>;
};
