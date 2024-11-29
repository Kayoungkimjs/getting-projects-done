// import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { SelectCard } from "../../components/Card";
import { toUpperCase } from "../../utils";
import {
  useGetCategoryNameAndIdQuery,
  useRegisterProjectMutation,
} from "../../graphql/generated/graphql";
import { StyledRegister } from "./style";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SelectCategoryForm: React.FC = () => {
  const navigate = useNavigate();

  const { data } = useGetCategoryNameAndIdQuery();
  const [registerProjectMutation] = useRegisterProjectMutation();
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const projectName = query.get("projectName");
  const description = query.get("description");
  console.log(projectName);

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
      await registerProjectMutation({
        variables: {
          input: {
            projectName,
            description,
            categoryId: selectedCategoryIds.map(String),
          },
        },
      });
      navigate(`/main/${selectedCategoryIds.map(String)[0]}`);
    } catch (error) {
      console.error("Error registering project:", error);
    }
  };

  return (
    <Layout isHeader={false}>
      <StyledRegister>
        <div className="registerHeader">
          <strong>Select the test modules you need</strong>
        </div>
        <div className="selectCardGroup">
          {data?.getCategoryNameAndId.map((category) => (
            <SelectCard
              key={category.categoryId}
              title={category.categoryEn}
              active={selectedCategoryIds.includes(category.categoryId)}
              disabled={false}
              checkbox={{
                value: category.categoryId,
                checked: selectedCategoryIds.includes(category.categoryId),
                onChange: handleSelectChange(category.categoryId),
              }}
            />
          ))}
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
