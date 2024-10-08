import { ReactNode } from "react";
import { Container, Main } from "./style";
import { GlobalHeader } from "../GlobalHeader";

export interface LayoutProps {
  isHeader?: boolean;
  isFooter?: boolean;
  children: ReactNode;
}

export const Layout = ({ isHeader = true, children }: LayoutProps) => {
  return (
    <Container>
      {isHeader ? <GlobalHeader /> : null}
      <Main>{children}</Main>
    </Container>
  );
};
