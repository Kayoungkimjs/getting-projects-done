import { DefaultTheme } from "styled-components";

const breakpoints = {
  tablet: "768px",
  desktop: "1200px",
};

const fontFamilies = {
  main: "Karla, sans-serif",
};

const fontSizes = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  base: "16px",
  lg: "32px",
  entry: "60px",
};

const lineHeights = {
  xs: "14px",
  sm: "16px",
  md: "24px",
  base: "22px",
  lg: "48px",
  entry: "32px",
};

const letterSpacings = {
  xs: "-0.018em",
  sm: "-0.018em",
  md: "-0.018em",
  base: "-0.025em",
  lg: "-0.025em",
  entry: "-0.025em",
};

const colors = {
  black: "#00000",
  white: "#fffff",
  background: "#CFCFCE",
  border: "#ABB0B0",
};

export const gutter = "10px";

export const theme: DefaultTheme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  gutter,
  lineHeights,
  letterSpacings,
};
