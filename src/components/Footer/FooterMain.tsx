import React from "react";
import Grid from "@mui/material/Grid";
import { Labels } from "../../types";
import { defaultFontFamily } from "../../constants";

interface FooterMainProps {
  labels: Labels;
}

const FooterMain = ({ labels }: FooterMainProps) => {
  return <Grid item md={9}>
    <span style={{
      color: "#000",
      fontFamily: defaultFontFamily,
      fontWeight: 600,
      letterSpacing: .25,
      lineHeight: "1.6em",
      marginBottom: "0.5em"
    }}>
      {labels.main.title}
    </span> <br />
    <span style={{
      color: "#000",
      fontFamily: defaultFontFamily,
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "1.6em"
    }}>
        {labels.main.description}
    </span>
  </Grid>;
};

export default FooterMain;
