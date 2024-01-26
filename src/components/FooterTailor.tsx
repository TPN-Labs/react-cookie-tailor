import React, { useEffect, useState } from "react";
import { CookieCategory, CookieCategoryDefinition, Labels, TailorColors, TailorCookiesDetails } from "../types";
import { getCategoryTitleAndDescription } from "../constants";
import { FooterBar, FooterMain, FooterTrailing } from "./Footer";
import "../css/out/rct_style.css";
import { Modal } from "./Modal";

interface FooterTailorProps {
  labels: Labels;
  categories: CookieCategory[];
  colors: TailorColors;
  cookies: TailorCookiesDetails;
  funcAccept: () => void;
  funcDecline: () => void;
}

const FooterTailor = ({
  labels,
  categories,
  colors,
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
        colors={colors}
        categories={enabledCategories}
        updateCategories={setEnabledCategories}
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
        categories={enabledCategories}
        updateCategories={setEnabledCategories}
        colors={colors}
        toggleModal={() => {
          setModalOpen(!modalOpen);
        }}
      />
    </div>
  );
};

export default FooterTailor;
