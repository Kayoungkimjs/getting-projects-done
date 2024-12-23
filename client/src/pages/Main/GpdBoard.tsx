import { useEffect, useState } from "react";
import { ProjectCard } from "../../components/Card";
import {
  ProjectSchema,
  useGetProjectByCategoryLazyQuery,
  useGetProjectByIdLazyQuery,
} from "../../graphql/generated/graphql";
import { StyledGpdBoard, DashBoard } from "./style";
import { GpdForm } from "./GpdForm";
import { useModal } from "../../hooks/useModal";

interface GpdBoardProps {
  projectList: ProjectSchema[];
  projectName: string;
  description: string;
}

export const GpdBoard: React.FC<GpdBoardProps> = ({
  projectList,
  projectName,
  description,
}) => {
  const [registerCards, setRegisterCards] = useState<ProjectSchema[]>([]);
  const [todoCards, setTodoCards] = useState<ProjectSchema[]>([]);
  const [completedCards, setCompletedCards] = useState<ProjectSchema[]>([]);
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  const [getProjectData, { data: projectData }] = useGetProjectByIdLazyQuery();

  console.log(projectData);
  useEffect(() => {
    if (projectList && projectList.length > 0) {
      setRegisterCards(projectList);
    }
  }, [projectList]);

  console.log("project", registerCards);

  // const handleYesBtnClick = (cardId: number) => {
  //   setIsFormOpen(true);
  // };

  const handleYesBtnClick = (cardId: number) => {
    const card = registerCards?.find((project) => project.projectId === cardId);
    if (card) {
      // 카드 상태를 업데이트하고 'registerCards'에서 제거, 'todoCards'에 추가
      setCompletedCards((prev) => [...prev, card]);
      setRegisterCards((prev) =>
        prev.filter((project) => project.projectId !== cardId),
      );
    }
  };

  const handleNoRegisterBtnClick = (cardId: number) => {
    getProjectData({ variables: { id: cardId } });
    handleModalOpen(cardId);
  };

  // const handleNoRegisterBtnClick = (cardId: number) => {
  //   const card = registerCards?.find((project) => project.id === cardId);
  //   if (card) {
  //     // 카드 상태를 업데이트하고 'todoCards'에서 제거, 'registerCards'에 추가
  //     setTodoCards((prev) => [...prev, card]);
  //     setRegisterCards((prev) =>
  //       prev.filter((project) => project.id !== cardId),
  //     );
  //   }
  // };

  const handleCompleteBtnClick = (cardId: number) => {
    const card = todoCards.find((project) => project.projectId === cardId);
    if (card) {
      // 카드 상태를 업데이트하고 'todoCards'에서 제거, 'completedCards'에 추가
      setCompletedCards((prev) => [...prev, card]);
      setTodoCards((prev) =>
        prev.filter((project) => project.projectId !== cardId),
      );
      setCompletedCards((prev) =>
        prev.filter((project) => project.projectId !== cardId),
      );
    }
  };

  return (
    <StyledGpdBoard>
      <div className="projectInfo">
        <h1 className="title">{projectName}</h1>
        <strong className="description">{description}</strong>
      </div>
      <DashBoard>
        <div className="registerContainer">
          <h3>REGISTER</h3>
          <div className="registerCardGroups">
            {registerCards?.map((project) => (
              <ProjectCard
                key={project.projectId}
                cardType={"register"}
                testType={project.testType || ""}
                testName={project.testName || ""}
                endpoint={project.endpoint || ""}
                creteria={project.criteria || ""}
                onYesBtnClick={() => handleYesBtnClick(project.projectId)}
                onNoRegisterBtnClick={() =>
                  handleNoRegisterBtnClick(project.projectId)
                }
              />
            ))}
          </div>
        </div>
        {isOpen && <GpdForm />}
        <div>
          <h3>TODOS</h3>
          <div className="todosCardGroups">
            {todoCards.map((project) => (
              <ProjectCard
                key={project.projectId}
                cardType={"todos"}
                testType={project.testType || ""}
                testName={project.testName || ""}
                endpoint={project.endpoint || ""}
                creteria={project.criteria || ""}
                onYesBtnClick={() => handleCompleteBtnClick(project.projectId)}
                onNoRegisterBtnClick={() =>
                  handleNoRegisterBtnClick(project.projectId)
                }
              />
            ))}
          </div>
        </div>

        <div>
          <h3>COMPLETE</h3>
          <div className="completedCardGroups">
            {completedCards.map((project) => (
              <ProjectCard
                key={project.projectId}
                cardType={"completed"}
                testType={project.testType || ""}
                testName={project.testName || ""}
                endpoint={project.endpoint || ""}
                creteria={project.criteria || ""}
                onNoCompleteBtnClick={() =>
                  handleNoRegisterBtnClick(project.projectId)
                }
              />
            ))}
          </div>
        </div>
      </DashBoard>
    </StyledGpdBoard>
  );
};
