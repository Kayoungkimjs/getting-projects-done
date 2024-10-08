import { ButtonType } from ".";
import { inlineFlexbox } from "../../styles/utils/flexbox";
import { textStyle } from "../../styles/utils/typography";
import { theme } from "../../styles";
import styled, { css } from "styled-components";

const buttonEntryWhite = css`
  ${textStyle("base")}
  font-weight: 700;
  padding: 0 110px;
  height: 60px;
  color: ${theme.colors.black};
  background-color: transparent;
  border: 1px solid ${theme.colors.black};

  &:not(:disabled):hover {
    opacity: 0.5;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  }
`;

const buttonEntryBlack = css`
  ${textStyle("base")}
  font-weight: 700;
  padding: 0 110px;
  height: 60px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  border: none;

  &:not(:disabled):hover {
    opacity: 0.5;
  }
`;

const buttonSquareWhite = css`
  ${textStyle("xs")}
  padding: 0 16px;
  height: 32px;
  color: ${theme.colors.black};
  background-color: transparent;
  border: 1px solid ${theme.colors.black};
  border-radius: 4px;

  &:not(:disabled):hover {
    font-weight: 700;
  }
`;

const buttonSquareBlack = css`
  ${textStyle("xs")}
  padding: 0 17px;
  height: 32px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  border: none;
  border-radius: 4px;

  &:not(:disabled):hover {
    font-weight: 700;
  }
`;

const buttonCircleWhite = css`
  ${textStyle("xs")}
  padding: 0 8px;
  width: 32px;
  height: 32px;
  color: ${theme.colors.black};
  background-color: transparent;
  border: 1px solid ${theme.colors.black};
  border-radius: 50%;

  &:not(:disabled):hover {
    font-weight: 700;
  }
`;

const buttonCircleBlack = css`
  ${textStyle("xs")}
  padding: 0 9px;
  width: 32px;
  height: 32px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  border: none;
  border-radius: 50%;

  &:not(:disabled):hover {
    font-weight: 700;
  }
`;

function getButtonType(type?: ButtonType) {
  switch (type) {
    case "entryWhite":
      return buttonEntryWhite;
    case "entryBlack":
      return buttonEntryBlack;
    case "squareWhite":
      return buttonSquareWhite;
    case "squareBlack":
      return buttonSquareBlack;
    case "circleWhite":
      return buttonCircleWhite;
    case "circleBlack":
      return buttonCircleBlack;
    default:
      return buttonSquareWhite;
  }
}

export const StyledButton = styled.button<{ $buttonType: ButtonType }>`
  ${inlineFlexbox()}

  &:disabled {
    cursor: not-allowed;
    /* opacity: 0.4; */
  }

  ${({ $buttonType }) => getButtonType($buttonType)};
`;
