import { gql } from "@apollo/client";

export const Query = gql`
  query GetProjectByCategory($categoryId: [Float!]!) {
    getProjectByCategory(categoryId: $categoryId) {
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
