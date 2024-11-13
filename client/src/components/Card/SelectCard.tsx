import { IconPlus } from "../../assets/svg";
import { CheckboxProps } from "../Forms/Checkbox";
import { Checkbox } from "../Forms/index";
import { StyledSelectCard } from "./style";

interface SelectCardProps {
  type?: "select" | "add";
  title?: string | null;
  disabled: boolean;
  active?: boolean;
  checkbox?: CheckboxProps;
  onClick?: () => void;
}

export const SelectCard: React.FC<SelectCardProps> = ({
  type = "select",
  title,
  disabled,
  active,
  checkbox,
  onClick,
}) => {
  return (
    <StyledSelectCard
      className={`${title} ${active ? "active" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {type === "select" && (
        <>
          <div className="cardTitle">
            <h3>{title}</h3>
          </div>
          <div className="checkbox">
            <Checkbox {...checkbox} />
          </div>
        </>
      )}

      {type === "add" && (
        <div className="addButton">
          <IconPlus className="icon" />
        </div>
      )}
    </StyledSelectCard>
  );
};
