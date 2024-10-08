import { gql } from "@apollo/client";

export const Query = gql`
  query GetUserById($userId: String!) {
    getUserById(userId: $userId) {
      id
      userId
      password
      email
      createdAt
      updatedAt
    }
  }
`;
