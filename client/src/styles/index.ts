import { DefaultTheme } from "styled-components";

const breakpoints = {
  tablet: "768px",
  desktop: "1200px",
};

const fontFamilies = {
  main: "Karla, sans-serif",
};

const fontSizes = {
  tag: "10px",
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "20px",
  lg: "32px",
  entry: "42px",
};

const lineHeights = {
  tag: "14px",
  xs: "16px",
  sm: "18px",
  base: "22px",
  md: "32px",
  lg: "48px",
  entry: "52px",
};

const letterSpacings = {
  tag: "-0.018em",
  xs: "-0.018em",
  sm: "-0.018em",
  base: "-0.025em",
  md: "-0.018em",
  lg: "-0.025em",
  entry: "-0.025em",
};

const colors = {
  black: "#000",
  white: "#ffff",
  background: "#CFCFCE",
  border: "#ABB0B0",
  red: "#EF5350",
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
