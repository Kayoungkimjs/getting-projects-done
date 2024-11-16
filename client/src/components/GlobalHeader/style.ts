import styled from "styled-components";
import { theme } from "../../styles";
import { flexbox } from "../../styles/utils/flexbox";
import { textStyle } from "../../styles/utils/typography";

export const StyledGlobalHeader = styled.div`
  ${flexbox("start", "center")};
  position: fixed;
  top: 0;
  left: 0;
  padding: 32px 0 32px 32px;
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.border};
  z-index: 100;

  .logo {
    position: relative;
    top: 3px;
    margin-right: 32px;
  }
`;

export const StyledNavigation = styled.div`
  .navList {
    ${flexbox("start")};

    & li:not(last-of-type) {
      ${textStyle("base")}
      font-weight: 600;
      margin-right: 24px;

      &:hover {
        font-weight: 900;
      }

      &.active {
        font-weight: 900;
      }
    }
  }
`;
