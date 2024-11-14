import { StyledNavigation } from "./style";
import { toUpperCase } from "../../utils";
import { NavLink, useLocation } from "react-router-dom";

interface MenuItem {
  link: string;
  name: string;
}

export interface NavigationProps {
  menuList: MenuItem[];
  onClick: (id: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  menuList,
  onClick,
}) => {
  const location = useLocation();

  return (
    <StyledNavigation>
      <h2 className="visuallyHidden">메뉴</h2>
      <ul className="navList">
        {menuList.map((item) => {
          const isActive = location.pathname === item.link;
          const categoryId = Number(item.link.split("/").pop());
          return (
            <li
              key={`menuList-${item.link}}`}
              className={isActive ? "active" : ""}
            >
              <NavLink to={item.link} onClick={() => onClick(categoryId)}>
                {toUpperCase(item.name)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </StyledNavigation>
  );
};
