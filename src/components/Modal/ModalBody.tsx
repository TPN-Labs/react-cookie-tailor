import React from "react";
import { CookieCategoryDefinition, Labels, TailorCookiesDetails, TailorTab } from "../../types";
import { ModalAboutTab, ModalConsentTab, ModalDetailsTab } from "./Tabs";

interface ModalBodyProps {
  labels: Labels;
  primaryColor: string;
  categories: CookieCategoryDefinition[];
  updateCategories: (categories: CookieCategoryDefinition[]) => void;
  cookies: TailorCookiesDetails;
}

export const ModalBody = ({
  labels,
  categories,
  updateCategories,
  cookies,
  primaryColor,
}: ModalBodyProps) => {
  const modalTabs: TailorTab[] = [
    {
      id: "about",
      title: labels.settings.headers.about.title,
      component: <ModalAboutTab labels={labels}/>,
    },
    {
      id: "details",
      title: labels.settings.headers.details.title,
      component: (
        <ModalDetailsTab
          cookies={cookies}
          categories={categories}
          updateCategories={updateCategories}
        />
      ),
    },
    {
      id: "consent",
      title: labels.settings.headers.consent.title,
      component: <ModalConsentTab labels={labels}/>,
    },
  ];

  const [activeTab, setActiveTab] = React.useState<TailorTab>(modalTabs[1]);
  const [activeTabKey, setActiveTabKey] = React.useState<string>(modalTabs[1].id);

  const setActiveTabById = (tab: TailorTab) => {
    setActiveTab(tab);
    setActiveTabKey(tab.id);
  };

  return (
    <>
      <div className={"rct-w-full"}>
        <div className={"rct-relative rct-right-0"}>
          <ul className={"rct-relative rct-flex rct-flex-wrap rct-p-1 rct-list-none rct-m-1"}>
            {modalTabs.map((tab) => (
              <li
                className={"rct-z-30 rct-flex-auto rct-text-center"}
                key={`tab_${tab.id}`}
                onClick={() => setActiveTabById(tab)}
              >
                <div
                  className={
                    "rct-border-solid rct-border-2 rct-z-30 rct-flex rct-items-center rct-justify-center " +
                    "rct-w-full rct-px-0 rct-py-1 rct-mb-0 rct-transition-all rct-ease-in-out " +
                    "rct-cursor-pointer rct-text-slate-700 "
                  }
                  style={{
                    borderColor: primaryColor,
                    backgroundColor: activeTabKey === tab.id ? primaryColor : "white",
                  }}
                >
                  <span
                    className={
                      "rct-text-md rct-font-bold rct-font-sans rct-tracking-wider rct-uppercase"
                    }
                    style={{
                      color: activeTabKey === tab.id ? "white" : primaryColor,
                    }}
                  >
                    {tab.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={"rct-p-6"}>
        <div className={"rct-overflow-y-auto"} style={{ height: 300 }}>
          {activeTab.component}
        </div>
      </div>
    </>
  );
};
