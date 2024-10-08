import { gql } from "@apollo/client";

export const Query = gql`
  query GetAllProjects {
    getAllProjects {
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
