import { CookieTailorProps, defaultTailorProps } from "./CookieTailor.props";
import FooterTailor from "./components/FooterTailor";
import React from "react";
import { defaultState } from "./CookieTailor.state";

function CookieTailor({ colors, labels, cookies }: CookieTailorProps) {
  const tailorCookies = cookies || defaultTailorProps.cookies;
  const tailorColors = colors || defaultTailorProps.colors;
  const tailorLabels = labels || defaultTailorProps.labels;
  const tailorContentStyle = defaultState.contentStyle;
  const tailorStyle = { ...defaultState.style, backgroundColor: tailorColors.background };

  return (
    <div style={tailorStyle}>
      <div style={tailorContentStyle}>
        <div className={"rct-container rct-place-self-center rct-p-4"}>
          <FooterTailor
            labels={tailorLabels}
            cookies={tailorCookies}
            colors={tailorColors}
            funcAccept={() => {}}
            funcDecline={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default CookieTailor;
