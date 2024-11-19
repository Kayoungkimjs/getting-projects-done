import { StyledTag } from "./style";

export type TagType =
  | "priority1"
  | "priority2"
  | "priority3"
  | "priority4"
  | "priority5"
  | "status1"
  | "status2"
  | "status3";
export interface TagProps {
  label?: string;
  className?: string;
  type?: TagType;
}

export const Tag: React.FC<TagProps> = ({ label, className, type }) => {
  if (!label) return null;

  return (
    <StyledTag className={className} type={type}>
      {label}
    </StyledTag>
  );
};
