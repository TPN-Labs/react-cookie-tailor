import React, { useEffect, useState } from "react";
import { CookieCategory, CookieCategoryDefinition, Labels, TailorCookiesDetails } from "../types";
import { getCategoryTitleAndDescription } from "../constants";
import { FooterBar, FooterMain, FooterTrailing } from "./Footer";
import "../css/out/rct_style.css";
import { Modal } from "./Modal";

interface FooterTailorProps {
  labels: Labels;
  categories: CookieCategory[];
  primaryColor: string;
  cookies: TailorCookiesDetails;
  funcAccept: () => void;
  funcDecline: () => void;
}

const FooterTailor = ({
  labels,
  categories,
  primaryColor,
  cookies,
  funcAccept,
  funcDecline,
}: FooterTailorProps) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(true);

  const mandatoryCategory: CookieCategoryDefinition = {
    id: 0,
    title: getCategoryTitleAndDescription(labels, CookieCategory.MANDATORY).title,
    description: getCategoryTitleAndDescription(labels, CookieCategory.MANDATORY).description,
    enabled: false,
    status: true,
    type: CookieCategory.MANDATORY,
  };

  const [enabledCategories, setEnabledCategories] = useState<CookieCategoryDefinition[]>([
    mandatoryCategory,
  ]);

  const providedCategories: CookieCategoryDefinition[] = categories.map((category, idx) => {
    const categoryTitleAndDescription = getCategoryTitleAndDescription(labels, category);
    return {
      id: idx + 1,
      title: categoryTitleAndDescription.title,
      description: categoryTitleAndDescription.description,
      enabled: true,
      status: true,
      type: category,
    };
  });

  useEffect(() => {
    setEnabledCategories([mandatoryCategory, ...providedCategories]);
  }, []);

  return (
    <div>
      <Modal
        labels={labels}
        showModal={modalOpen}
        primaryColor={primaryColor}
        categories={enabledCategories}
        updateCategories={setEnabledCategories}
        cookies={cookies}
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
        categories={enabledCategories}
        updateCategories={setEnabledCategories}
        primaryColor={primaryColor}
        toggleModal={() => {
          setModalOpen(!modalOpen);
        }}
      />
    </div>
  );
};

export default FooterTailor;
