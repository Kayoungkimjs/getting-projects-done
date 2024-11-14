import { Link } from "react-router-dom";
import { Logo } from "../../assets/svg";
import { StyledGlobalHeader } from "./style";
import { Navigation, NavigationProps } from "./Navigation";

interface GlobalHeaderProps extends NavigationProps {
  link: string;
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  link,
  menuList,
  onClick,
}) => {
  return (
    <StyledGlobalHeader>
      <h1 className="logo">
        <Link to={link}>
          <Logo width={50} />
        </Link>
      </h1>
      <Navigation menuList={menuList} onClick={onClick} />
    </StyledGlobalHeader>
  );
};
