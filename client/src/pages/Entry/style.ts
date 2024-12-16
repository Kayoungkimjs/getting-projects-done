import styled from "styled-components";
import { positionCenter } from "../../styles/utils/position";
import { textStyle } from "../../styles/utils/typography";
import { theme } from "../../styles";

export const StyledRegister = styled.div`
  ${positionCenter()}
  text-align: center;

  .registerHeader {
    margin-bottom: 100px;

    p,
    strong {
      ${textStyle("entry")}
      font-weight: 700;
      white-space: nowrap;
    }

    strong {
      display: block;
      margin-top: 40px;
    }
  }

  .nameInput {
    ${textStyle("lg")}
    width: 100%;
    height: 50px;
    margin-bottom: 100px;
    text-align: center;
    border-bottom: 3px solid ${theme.colors.black};
  }

  .selectCardGroup {
    width: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    margin-top: -30px;
    margin-bottom: 50px;
  }

  .selectBtn {
    width: 100%;
    height: 70px;
  }
`;
