import styled from "styled-components";
import { flexbox } from "../../styles/utils/flexbox";
import { theme } from "../../styles";

export const StyledErrorInfo = styled.small`
  ${flexbox("start")}
  margin-top: 5px;
  color: ${theme.colors.red};
  font-weight: 500;
`;
