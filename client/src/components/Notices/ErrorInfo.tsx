import { StyledErrorInfo } from "./style";

interface ErrorInfoProps {
  message: string;
  className?: string;
}

export const ErrorInfo: React.FC<ErrorInfoProps> = ({ message, className }) => {
  return <StyledErrorInfo className={className}>{message}</StyledErrorInfo>;
};
