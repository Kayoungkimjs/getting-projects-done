import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { SelectCard } from "../../components/Card";
import { toUpperCase } from "../../utils";
import { useGetRegistersByUserIdQuery } from "../../graphql/generated/graphql";
import { StyledRegister } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SelectProjectForm: React.FC = () => {
  const navigate = useNavigate();

  const { data } = useGetRegistersByUserIdQuery();
  const projects = data?.getRegistersByUserId.registers;
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);

  const handleSelectChange =
    (categoryId: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setSelectedCategoryIds((prev) => {
        if (checked) {
          return [...prev, categoryId];
        } else {
          return prev.filter((id) => id !== categoryId);
        }
      });
    };

  const handleButtonClick = async () => {
    try {
      await console.log("Sucess registering project:");
      navigate("/project");
    } catch (error) {
      console.error("Error registering project:", error);
    }
  };

  return (
    <Layout isHeader={false}>
      <StyledRegister>
        <div className="registerHeader">
          <strong>Select the Project you need</strong>
        </div>
        <div className="selectCardGroup">
          {projects?.map((project) => (
            <SelectCard
              key={project.id}
              title={project.projectName}
              disabled={false}
              checkbox={{
                value: project.id,
                checked: selectedCategoryIds.includes(project.id),
                onChange: handleSelectChange(project.id),
              }}
            />
          ))}
          <SelectCard title={"Add New Project"} disabled={false} type={"add"} />
        </div>
        <Button
          className="selectBtn"
          buttonType={"entryWhite"}
          onClick={handleButtonClick}
        >
          {toUpperCase("Start Getting Projects Done")}
        </Button>
      </StyledRegister>
    </Layout>
  );
};
