import { gql } from "@apollo/client";

export const Query = gql`
  query GetProjectById($id: Float!) {
    getProjectById(id: $id) {
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
    }
  }
`;
