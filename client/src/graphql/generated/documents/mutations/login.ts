import { gql } from "@apollo/client";
export const MUTATION = gql`
  mutation login($input: AuthInputSchema!) {
    login(input: $input) {
      accessToken
      userId
    }
  }
`;
