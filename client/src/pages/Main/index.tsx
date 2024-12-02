import { useEffect, useState } from "react";
import { GlobalHeader } from "../../components/GlobalHeader";
import {
  useGetProjectByCategoryQuery,
  useGetRegistersByUserIdQuery,
} from "../../graphql/generated/graphql";
import { GpdBoard } from "./GpdBoard";
import { StyledMain } from "./style";

export const Main: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number[]>([]);
  const { data: registerList, refetch: registerListRefetch } =
    useGetRegistersByUserIdQuery();

  const categoryId =
    registerList?.getRegistersByUserId.registers
      ?.filter((e) => e.categoryId)
      ?.flatMap((register) => register.categoryId?.map(Number) || [])
      .filter(Boolean) || [];

  const { data: projectList, refetch: projectRefetch } =
    useGetProjectByCategoryQuery({
      variables: { categoryId },
    });

  const projectName =
    registerList?.getRegistersByUserId.registers?.find(
      (i) => i.projectName !== undefined && i.projectName !== null,
    )?.projectName || "";

  const description =
    registerList?.getRegistersByUserId.registers?.find(
      (i) => i.description !== undefined && i.description !== null,
    )?.description || "";

  useEffect(() => {
    registerListRefetch();
  }, []);

  useEffect(() => {
    projectRefetch();
  }, [projectList, projectRefetch]);

  useEffect(() => {
    if (categoryId[0]) {
      setSelectedCategoryId([categoryId[0]]);
    }
  }, []);

  const handleCategorySelect = (id: number) => {
    setSelectedCategoryId([id]);
  };

  const filteredProjects =
    projectList?.getProjectByCategory.project.filter((project) => {
      return (
        project.categoryId && selectedCategoryId.includes(project.categoryId)
      );
    }) || [];

  const menuList = Array.from(
    new Set(
      projectList?.getProjectByCategory.project.map(
        (project) => project.categoryEn,
      ),
    ).values(),
  ).map((categoryName, index) => ({
    name: categoryName || "",
    link: `/main/${String(categoryId[index])}`,
  }));

  return (
    <StyledMain>
      <GlobalHeader
        link={`/main/${categoryId[0]}`}
        menuList={menuList}
        onClick={handleCategorySelect}
      />
      <GpdBoard
        projectList={filteredProjects}
        projectName={projectName}
        description={description}
      />
    </StyledMain>
  );
};
