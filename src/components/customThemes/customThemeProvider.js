import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "2.2rem",
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif`,
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.7rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "6rem",
  },
};

function CustomThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
