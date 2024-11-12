import { gql } from "@apollo/client";

export const Query = gql`
  query GetAllProjects {
    getAllProjects {
      project {
        projectId
        categoryId
        categoryKr
        categoryEn
        endpoint
        testType
        testName
        criteria
      }
      listLength
    }
  }
`;
