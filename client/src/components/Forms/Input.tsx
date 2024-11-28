import { ChangeEvent } from "react";
import { StyledInput } from "./style";

export type InputType = "line" | "box";

interface InputProps {
  inputType?: InputType;
  type?: string;
  id?: string;
  name?: string;
  value?: string | number;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  inputType = "box",
  type = "text",
  id,
  name,
  value,
  className,
  placeholder,
  required,
  disabled,
  onBlur,
  onChange,
}) => {
  return (
    <StyledInput
      $inputType={inputType}
      type={type}
      id={id}
      name={name}
      value={value}
      className={className}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};
