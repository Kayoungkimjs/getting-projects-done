import styled from "styled-components";
import { theme } from "../../styles";
import { textStyle } from "../../styles/utils/typography";
import { InputType } from "./Input";

export const StyledCheckbox = styled.div`
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid ${theme.colors.black};
    border-radius: 50%;
    cursor: pointer;
    position: relative;

    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      background-color: ${theme.colors.white};
      border: none;
    }
  }

  input[type="checkbox"]:checked {
    background-color: ${theme.colors.white};
    border: none;
  }

  input[type="checkbox"]:checked:before {
    content: "";
    display: block;
    width: 5px;
    height: 9px;
    border: solid ${theme.colors.black};
    border-width: 0 2px 2px 0;
    position: absolute;
    bottom: 8px;
    left: 9px;
    transform: rotate(45deg);
  }
`;

export const StyledInput = styled.input<{ $inputType: InputType }>`
  ${textStyle("md")};
  font-weight: 700;
  display: block;
  padding: 14px 5px;
  width: 100%;
  height: 48px;
  color: ${theme.colors.black};
  background-color: ${({ $inputType }) =>
    $inputType === "box" ? theme.colors.white : "transparent"};
  border: ${({ $inputType }) =>
    $inputType === "box" ? `2px solid ${theme.colors.black}` : "none"};
  border-bottom: ${({ $inputType }) =>
    $inputType === "line" ? `3px solid ${theme.colors.black}` : "none"};
  transition:
    background-color 200ms ease-in-out,
    border-color 200ms ease-in-out;

  &::placeholder {
    font-size: ${theme.fontSizes.md};
    font-weight: 400;
    color: ${theme.colors.border};
  }

  &:focus {
    border: ${({ $inputType }) =>
      $inputType === "box" ? `3px solid ${theme.colors.black}` : "none"};
    border-bottom: ${({ $inputType }) =>
      $inputType === "line" ? `3px solid ${theme.colors.black}` : "none"};
  }
`;
