import { gql } from "@apollo/client";

export const Query = gql`
  query GetRegistersByUserId {
    getRegistersByUserId {
      registers {
        registerId
        projectName
        description
        categoryId
        createdAt
      }
    }
  }
`;
