import { gql } from "@apollo/client";
export const MUTATION = gql`
  mutation RegisterProject($input: CreateProjectSchema!) {
    registerProject(input: $input) {
      registerId
      projectName
      description
      categoryId
      createdAt
      user {
        id
        userId
      }
    }
  }
`;
