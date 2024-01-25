import React from "react";
import { Labels } from "../../../types";

interface ModalConsentTabProps {
  labels: Labels;
}

export const ModalConsentTab = ({ labels }: ModalConsentTabProps) => {
  return <div>Consent {labels.settings.title}</div>;
};
