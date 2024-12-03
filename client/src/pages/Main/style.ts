import styled from "styled-components";
import { textStyle } from "../../styles/utils/typography";
import { theme } from "../../styles";

export const StyledMain = styled.div`
  width: 100%; //1920px
  height: auto;
  padding: 0 32px;
`;

export const StyledGpdBoard = styled.main`
  width: 100%;
  height: calc(100% - 60px);
  padding: 40px 24px 0 24px;
  margin-top: 40px;

  .projectInfo {
    text-align: start;
    margin-bottom: 20px;

    .title {
      ${textStyle("lg")}
    }

    strong {
      ${textStyle("base")}
      font-weight: 500;
    }
  }
`;

export const DashBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  gap: 50px;

  h3 {
    /* margin-bottom: 30px; */
  }
`;

export const StyledGpdForm = styled.div`
  z-index: 100;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  background: ${theme.colors.black};
  opacity: 0.7;
  /* transition: background 300ms ease-in-out */
`;
