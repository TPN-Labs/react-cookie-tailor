import React from "react";
import { Labels } from "../../types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import FooterTrailing from "./FooterTrailing";
import FooterMain from "./FooterMain";
import FooterBar from "./FooterBar";

interface FooterTailorProps {
  labels: Labels;
}

const FooterTailor = ({ labels }: FooterTailorProps) => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <FooterMain labels={labels} />
        <FooterTrailing labels={labels} />
      </Grid>
      <Divider sx={{ my: 1 }} />
      <FooterBar labels={labels} />
    </Box>
  </>;
};

export default FooterTailor;
