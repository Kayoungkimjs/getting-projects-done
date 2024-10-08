import styled from "styled-components";
import { textStyle } from "../../styles/utils/typography";
import { flexbox } from "../../styles/utils/flexbox";
import { theme } from "../../styles";

export const StyledLogin = styled.div`
  display: ${flexbox()};
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .loginHeader {
    margin-bottom: 50px;

    h1 {
      ${textStyle("entry")}
      font-weight: 700;
      white-space: nowrap;
    }
  }

  .idGroup {
    margin-bottom: 52px;

    h3 {
      ${textStyle("md")}
    }
  }

  .passwordGroup {
    margin-bottom: 62px;
  }

  .loginBtn {
    width: 100%;
    transition:
      color 200ms ease-in-out,
      background-color 200ms ease-in-out;

    &.active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
    }
  }
`;
