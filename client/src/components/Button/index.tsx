import { ReactNode } from "react";
import { StyledButton } from "./styles";

export type ButtonType =
  | "entryWhite"
  | "entryBlack"
  | "squareWhite"
  | "squareBlack"
  | "circleWhite"
  | "circleBlack";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  buttonType: ButtonType;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  buttonType,
  className,
  children,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      $buttonType={buttonType}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
