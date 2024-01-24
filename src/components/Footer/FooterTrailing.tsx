import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Labels } from "../../types";

interface FooterTrailingProps {
  labels: Labels;
}

const FooterTrailing = ({ labels }: FooterTrailingProps) => {
  return (
    <Grid item md={3}>
      <Grid justifyContent="flex-end" container spacing={24}>
        <Grid item>
          <Button variant="contained" size={"large"} sx={{ mb: 1 }} style={{ width: "250px" }}>
            {labels.main.buttonAllow}
          </Button>
          <br />
          <Button variant="outlined" size={"large"} style={{ width: "250px" }}>
            {labels.main.buttonDefault}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterTrailing;
