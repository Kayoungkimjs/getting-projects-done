import * as React from "react";
import type { SVGProps } from "react";
const SvgIconPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M24 15.334v17.333M15.334 24h17.333m13 0c0 11.966-9.7 21.667-21.667 21.667-11.966 0-21.666-9.7-21.666-21.667 0-11.966 9.7-21.666 21.666-21.666S45.667 12.034 45.667 24"
    />
  </svg>
);
export default SvgIconPlus;
