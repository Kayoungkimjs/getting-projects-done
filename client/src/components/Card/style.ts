import { theme } from "../../styles";
import { flexbox } from "../../styles/utils/flexbox";
import styled from "styled-components";
import { textStyle } from "../../styles/utils/typography";
import { ProjectCardType } from "./ProjectCard";

export const StyledSelectCard = styled.button`
  ${flexbox("between")}
  border: 2px solid ${theme.colors.black};
  padding: 0 15px;
  width: 100%;
  height: 70px;
  border-radius: 5px;
  cursor: pointer;

  .cardTitle {
    h3 {
      ${textStyle("md")}
    }
  }

  .addButton {
    margin: 0 auto;
    width: 24px;
    height: 24px;
    color: ${theme.colors.black};
  }

  &:not(:disabled):hover,
  &.active {
    background-color: ${theme.colors.black};

    .cardTitle h3 {
      font-weight: 700;
      color: ${theme.colors.white};
    }

    input[type="checkbox"] {
      background-color: ${theme.colors.white};
      border: none;
    }
  }
`;

interface StyledProjectCardProps {
  type: ProjectCardType;
}

export const StyledProjectCard = styled.div<StyledProjectCardProps>`
  width: ${({ type }) => (type === "register" ? "420px" : "400px")};
  /* width: 420px; */
  height: 150px;
  padding: 7px 16px;
  border: 2px solid ${theme.colors.black};
  margin-bottom: 15px;

  .cardHeader {
    ${flexbox("between")}
    .headerItems {
      ${flexbox("start", "start")}
      strong {
        ${textStyle("sm")}
      }
    }
    .testType {
      margin-right: 3px;
    }

    .icon {
      position: relative;
      top: 2px;
    }

    .priority {
      position: relative;
      right: 7px;
      margin-right: -7px;
    }

    .status {
      position: ${({ type }) => (type === "completed" ? "relative" : "static")};
      right: ${({ type }) => (type === "completed" ? "8px" : "0")};
    }
  }

  .cardMain {
    ${flexbox("start", "start")}
    flex-direction: column;

    h1,
    h3 {
      text-align: start;
    }

    .testName {
      ${textStyle("sm")}
    }
    .creteria {
      ${textStyle("base")}/* margin-bottom: 20px; */
    }
  }

  .cardFooter {
    text-align: end;
    .registerBtnGroup {
      .yesButton {
        margin-right: 8px;
      }
    }

    .todosButton,
    .completedButton {
      text-align: end;
    }
  }
`;
