import { IconChevron } from "../../assets/svg";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { StyledProjectCard } from "./style";

export type ProjectCardType = "register" | "todos" | "completed";

interface ProjectCardProps {
  cardType: ProjectCardType;
  testType?: string;
  endpoint?: string;
  testName?: string;
  creteria?: string;
  notes?: string;
  onYesBtnClick?: () => void;
  onNoRegisterBtnClick?: () => void;
  onNoCompleteBtnClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  cardType = "register",
  testType,
  endpoint,
  testName,
  creteria,
  notes,
  onYesBtnClick,
  onNoRegisterBtnClick,
  onNoCompleteBtnClick,
}) => {
  return (
    <StyledProjectCard type={cardType}>
      <header className="cardHeader">
        {cardType === "register" ? (
          <div className="headerItems">
            <strong className="testType">{testType}</strong>
            <strong className="endpoint">{endpoint}</strong>
          </div>
        ) : (
          <div className="headerItems">
            {cardType === "todos" ? (
              <Tag className="priority" label={"P1"} type={"priority1"} />
            ) : null}
            <Tag className="status" label={"Not started"} type={"status1"} />
          </div>
        )}
        {cardType === "todos" ? (
          <div className="icon">
            <IconChevron width={24} />
          </div>
        ) : null}
      </header>
      <main className="cardMain">
        <div>
          <h3 className="testName">{testName}</h3>
          <h1 className="creteria">{creteria}</h1>
          {cardType === "todos" ? <p>{notes}</p> : null}
        </div>
      </main>
      <footer className="cardFooter">
        {cardType === "register" && (
          <div className="registerBtnGroup">
            <Button
              className="yesButton"
              buttonType={"squareWhite"}
              onClick={onYesBtnClick}
            >
              Yes
            </Button>
            <Button
              className="noButton"
              buttonType={"squareBlack"}
              onClick={onNoRegisterBtnClick}
            >
              No
            </Button>
          </div>
        )}
        {cardType === "todos" && (
          <Button
            className="todosButton"
            buttonType={"circleWhite"}
            onClick={onYesBtnClick}
          >
            Yes
          </Button>
        )}
        {cardType === "completed" && (
          <Button
            className="completedButton"
            buttonType={"circleBlack"}
            onClick={onNoCompleteBtnClick}
          >
            No
          </Button>
        )}
      </footer>
    </StyledProjectCard>
  );
};
