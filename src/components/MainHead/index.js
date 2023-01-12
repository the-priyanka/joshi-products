import React from "react";
import { Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const MainHead = (props) => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div
      className={`ui raised very padded text segment ${props.classNames} commonContainer`}
    >
      <ThemeProvider theme={theme}>
        <Typography className="mainHeading" variant="h2">
          {props.title}
        </Typography>
        <Typography className="mainHeading" variant="h4">
          {props.titleh4}
        </Typography>
        <Typography className="mainHeading" variant="h6">
          {props.shortTitle}
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default MainHead;
