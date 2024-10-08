import * as React from "react";
import type { SVGProps } from "react";
const SvgIconChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m6 9 6 6 6-6"
    />
  </svg>
);
export default SvgIconChevron;
