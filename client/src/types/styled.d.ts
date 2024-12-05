import "styled-components";

declare module "styled-components" {
  export type TypographyScale =
    | "tag"
    | "xs"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "entry";

  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      background: string;
      border: string;
      red: string;
    };

    fontSizes: {
      tag: string;
      xs: string;
      sm: string;
      md: string;
      base: string;
      lg: string;
      entry: string;
    };

    lineHeights: {
      tag: string;
      xs: string;
      sm: string;
      md: string;
      base: string;
      lg: string;
      entry: string;
    };

    letterSpacings: {
      tag: string;
      xs: string;
      sm: string;
      md: string;
      base: string;
      lg: string;
      entry: string;
    };
  }
}
