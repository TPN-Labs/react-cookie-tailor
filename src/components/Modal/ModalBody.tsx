import { useState } from "react";
import { Label } from "../../types/label";
import { TailorColors } from "../../types/color";
import { TailorCookiesDetails } from "../../types/cookie";
import { TailorTab } from "../../types/tab";
import ModalDetailsTab from "./Tabs/ModalDetailsTab";
import ModalAboutTab from "./Tabs/ModalAboutTab";
import ModalConsentTab from "./Tabs/ModalConsentTab";

type ModalBodyProps = {
  labels: Label;
  colors: TailorColors;
  cookies: TailorCookiesDetails;
}

export default function ModalBody({ labels, cookies, colors }: ModalBodyProps) {
  const modalTabs: TailorTab[] = [
    {
      id: "consent",
      title: labels.settings.headers.consent.title,
      component: <ModalConsentTab labels={labels} colors={colors} />,
    },
    {
      id: "details",
      title: labels.settings.headers.details.title,
      component: <ModalDetailsTab labels={labels} cookies={cookies} colors={colors} />,
    },
    {
      id: "about",
      title: labels.settings.headers.about.title,
      component: <ModalAboutTab labels={labels} colors={colors} />,
    },
  ];

  const [activeTab, setActiveTab] = useState<TailorTab>(modalTabs[1]);
  const [activeTabKey, setActiveTabKey] = useState<string>(modalTabs[1].id);

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
                    borderColor: colors.primary,
                    backgroundColor: activeTabKey === tab.id ? colors.primary : colors.background,
                  }}
                >
                  <span
                    className={
                      "rct-text-md rct-font-bold rct-font-sans rct-tracking-wider rct-uppercase"
                    }
                    style={{
                      color: activeTabKey === tab.id ? colors.white : colors.primary,
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
