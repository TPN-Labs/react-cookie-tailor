import React from "react";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { Labels } from "../../types";
import { defaultFontFamily, defaultFontWeight, defaultLetterSpacing } from "../../constants";

interface FooterBarProps {
  labels: Labels;
}

const FooterBar = ({ labels }: FooterBarProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <FormGroup row>
          <FormControlLabel
            value="switchMandatory"
            control={<Switch color="primary" disabled defaultChecked />}
            label={
              <Typography
                color="common.black"
                fontFamily={defaultFontFamily}
                fontWeight={defaultFontWeight}
                letterSpacing={defaultLetterSpacing}
              >
                {labels.main.switchMandatory}
              </Typography>
            }
            labelPlacement="start"
            sx={{ ml: 0 }}
          />
          <FormControlLabel
            value="switchPreferences"
            control={<Switch color="primary" defaultChecked />}
            label={
              <Typography
                color="common.black"
                fontFamily={defaultFontFamily}
                fontWeight={defaultFontWeight}
                letterSpacing={defaultLetterSpacing}
              >
                {labels.main.switchPreferences}
              </Typography>
            }
            labelPlacement="start"
            sx={{ ml: 5 }}
          />
          <FormControlLabel
            value="switchStatistics"
            control={<Switch color="primary" defaultChecked />}
            label={
              <Typography
                color="common.black"
                fontFamily={defaultFontFamily}
                fontWeight={defaultFontWeight}
                letterSpacing={defaultLetterSpacing}
              >
                {labels.main.switchStatistics}
              </Typography>
            }
            labelPlacement="start"
            sx={{ ml: 5 }}
          />
          <FormControlLabel
            value="switchMarketing"
            control={<Switch color="primary" defaultChecked />}
            label={
              <Typography
                color="common.black"
                fontFamily={defaultFontFamily}
                fontWeight={defaultFontWeight}
                letterSpacing={defaultLetterSpacing}
              >
                {labels.main.switchMarketing}
              </Typography>
            }
            labelPlacement="start"
            sx={{ ml: 5 }}
          />
          <FormControlLabel
            value="switchMarketing"
            label={
              <Typography
                color="#1976D2"
                fontFamily={defaultFontFamily}
                fontWeight={defaultFontWeight}
                letterSpacing={defaultLetterSpacing}
              >
                {labels.main.moreSettings}
              </Typography>
            }
            labelPlacement="start"
            sx={{ ml: 5 }}
            control={<div></div>}
          />
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default FooterBar;
