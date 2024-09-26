import "styled-components";

declare module "styled-components" {
  export type TypographyScale = "xs" | "sm" | "md" | "base" | "lg" | "entry";

  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      background: string;
      border: string;
    };

    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      base: string;
      lg: string;
      entry: string;
    };

    lineHeights: {
      xs: string;
      sm: string;
      md: string;
      base: string;
      lg: string;
      entry: string;
    };

    letterSpacings: {
      xs: string;
      sm: string;
      md: string;
      base: string;
      lg: string;
      entry: string;
    };
  }
}
