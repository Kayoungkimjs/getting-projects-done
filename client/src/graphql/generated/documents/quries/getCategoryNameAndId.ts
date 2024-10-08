import { gql } from "@apollo/client";

export const Query = gql`
  query GetCategoryNameAndId {
    getCategoryNameAndId {
      categoryEn
      categoryId
    }
  }
`;
