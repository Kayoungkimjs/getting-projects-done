import { StyledCheckbox } from "./style";

export interface CheckboxProps {
  className?: string;
  checked?: boolean;
  value?: number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked,
  value,
  disabled,
  onChange,
}) => {
  return (
    <StyledCheckbox className={className}>
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        value={value}
        disabled={disabled}
        onChange={onChange}
        aria-label={`${checked ? "선택 됨" : "선택 안됨"}`}
      />
      <label htmlFor="checkbox"></label>
    </StyledCheckbox>
  );
};
