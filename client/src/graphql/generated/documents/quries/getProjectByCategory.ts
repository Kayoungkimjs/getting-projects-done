import { gql } from "@apollo/client";

export const Query = gql`
  query GetProjectByCategory($categoryId: Float!) {
    getProjectByCategory(categoryId: $categoryId) {
      project {
        id
        categoryId
        categoryKr
        categoryEn
        endpoint
        testType
        testName
        criteria
        notes
        result
        status
        priority
      }
      listLength
    }
  }
`;
