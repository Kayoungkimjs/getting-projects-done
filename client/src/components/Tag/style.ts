import styled, { css } from "styled-components";
import { TagProps, TagType } from "./index";
import { inlineFlexbox } from "../../styles/utils/flexbox";
import { textStyle } from "../../styles/utils/typography";

type StyledTagProps = Pick<TagProps, "type">;

const tagP1 = css`
  color: #ff3b30;
  background-color: #ffdcdc;
`;

const tagP2 = css`
  color: #ff9500;
  background-color: #ffece1;
`;

const tagP3 = css`
  color: #f3af3d;
  background-color: #fff8e1;
`;

const tagP4 = css`
  color: #188544;
  background-color: #cdf4dd;
`;

const tagP5 = css`
  color: #5856d6;
  background-color: #c5d9ff;
`;

const tagS1 = css`
  color: #268fb0;
  background-color: #d9f4f8;
`;

const tagS2 = css`
  color: #2c62b4;
  background-color: #e1f6ff;
`;

const tagS3 = css`
  color: #188544;
  background-color: #cdf4dd;
`;

function getTagType(type?: TagType) {
  switch (type) {
    case "priority1":
      return tagP1;
    case "priority2":
      return tagP2;
    case "priority3":
      return tagP3;
    case "priority4":
      return tagP4;
    case "priority5":
      return tagP5;
    case "status1":
      return tagS1;
    case "status2":
      return tagS2;
    case "status3":
      return tagS3;
    default:
      return tagS3;
  }
}

export const StyledTag = styled.strong<StyledTagProps>`
  ${inlineFlexbox()};
  ${textStyle("xs")}
  font-weight: 700;
  height: 22px;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 0 6px 6px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  white-space: nowrap;

  ${({ type }) => getTagType(type)};
`;
