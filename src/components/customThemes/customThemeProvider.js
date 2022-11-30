import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Children } from "react";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "2.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.6rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.83rem",
  },
};

function customThemeProvider() {
  return <ThemeProvider theme={theme}>{Children}</ThemeProvider>;
}

export default customThemeProvider;
