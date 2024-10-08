import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthInputSchema = {
  password: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type GetAllProjectsResponseSchema = {
  __typename?: 'GetAllProjectsResponseSchema';
  listLength?: Maybe<Scalars['Float']['output']>;
  project: Array<ProjectSchema>;
};

export type GetCategoryNameAndIdResponeSchema = {
  __typename?: 'GetCategoryNameAndIdResponeSchema';
  categoryEn: Scalars['String']['output'];
  categoryId: Scalars['Float']['output'];
};

export type GetProjectByCategoryResponseSchema = {
  __typename?: 'GetProjectByCategoryResponseSchema';
  listLength?: Maybe<Scalars['Float']['output']>;
  project: Array<ProjectSchema>;
};

export type LoginInputSchema = {
  accessToken: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type LoginSchema = {
  __typename?: 'LoginSchema';
  accessToken: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginSchema;
};


export type MutationLoginArgs = {
  input: AuthInputSchema;
};

export type ProjectInputSchema = {
  categoryEn?: InputMaybe<Scalars['String']['input']>;
  categoryId: Scalars['Float']['input'];
  categoryKr?: InputMaybe<Scalars['String']['input']>;
  criteria: Scalars['String']['input'];
  endpoint?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  result?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
  testName?: InputMaybe<Scalars['String']['input']>;
  testType?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectSchema = {
  __typename?: 'ProjectSchema';
  categoryEn?: Maybe<Scalars['String']['output']>;
  categoryId: Scalars['Float']['output'];
  categoryKr?: Maybe<Scalars['String']['output']>;
  criteria: Scalars['String']['output'];
  endpoint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Float']['output']>;
  result?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  testName?: Maybe<Scalars['String']['output']>;
  testType?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllProjects: GetAllProjectsResponseSchema;
  getCategoryNameAndId: Array<GetCategoryNameAndIdResponeSchema>;
  getProjectByCategory: GetProjectByCategoryResponseSchema;
  getUserById: UserSchema;
};


export type QueryGetProjectByCategoryArgs = {
  categoryId: Scalars['Float']['input'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['String']['input'];
};

export type UserInputSchema = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  password: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type UserSchema = {
  __typename?: 'UserSchema';
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  password: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProjectsQuery = { __typename?: 'Query', getAllProjects: { __typename?: 'GetAllProjectsResponseSchema', listLength?: number | null, project: Array<{ __typename?: 'ProjectSchema', id: number, categoryId: number, categoryKr?: string | null, categoryEn?: string | null, endpoint?: string | null, testType?: string | null, testName?: string | null, criteria: string, notes?: string | null, result?: number | null, status?: number | null, priority?: number | null }> } };

export type GetCategoryNameAndIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoryNameAndIdQuery = { __typename?: 'Query', getCategoryNameAndId: Array<{ __typename?: 'GetCategoryNameAndIdResponeSchema', categoryEn: string, categoryId: number }> };

export type GetProjectByCategoryQueryVariables = Exact<{
  categoryId: Scalars['Float']['input'];
}>;


export type GetProjectByCategoryQuery = { __typename?: 'Query', getProjectByCategory: { __typename?: 'GetProjectByCategoryResponseSchema', listLength?: number | null, project: Array<{ __typename?: 'ProjectSchema', id: number, categoryId: number, categoryKr?: string | null, categoryEn?: string | null, endpoint?: string | null, testType?: string | null, testName?: string | null, criteria: string, notes?: string | null, result?: number | null, status?: number | null, priority?: number | null }> } };

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'UserSchema', id: number, userId: string, password: string, email?: string | null, createdAt?: string | null, updatedAt?: string | null } };

export type LoginMutationVariables = Exact<{
  input: AuthInputSchema;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginSchema', accessToken: string, userId: string } };


export const GetAllProjectsDocument = gql`
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

/**
 * __useGetAllProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options);
      }
export function useGetAllProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options);
        }
export function useGetAllProjectsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options);
        }
export type GetAllProjectsQueryHookResult = ReturnType<typeof useGetAllProjectsQuery>;
export type GetAllProjectsLazyQueryHookResult = ReturnType<typeof useGetAllProjectsLazyQuery>;
export type GetAllProjectsSuspenseQueryHookResult = ReturnType<typeof useGetAllProjectsSuspenseQuery>;
export type GetAllProjectsQueryResult = Apollo.QueryResult<GetAllProjectsQuery, GetAllProjectsQueryVariables>;
export const GetCategoryNameAndIdDocument = gql`
    query GetCategoryNameAndId {
  getCategoryNameAndId {
    categoryEn
    categoryId
  }
}
    `;

/**
 * __useGetCategoryNameAndIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryNameAndIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryNameAndIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryNameAndIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoryNameAndIdQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryNameAndIdQuery, GetCategoryNameAndIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryNameAndIdQuery, GetCategoryNameAndIdQueryVariables>(GetCategoryNameAndIdDocument, options);
      }
export function useGetCategoryNameAndIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryNameAndIdQuery, GetCategoryNameAndIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryNameAndIdQuery, GetCategoryNameAndIdQueryVariables>(GetCategoryNameAndIdDocument, options);
        }
export function useGetCategoryNameAndIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoryNameAndIdQuery, GetCategoryNameAndIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoryNameAndIdQuery, GetCategoryNameAndIdQueryVariables>(GetCategoryNameAndIdDocument, options);
        }
export type GetCategoryNameAndIdQueryHookResult = ReturnType<typeof useGetCategoryNameAndIdQuery>;
export type GetCategoryNameAndIdLazyQueryHookResult = ReturnType<typeof useGetCategoryNameAndIdLazyQuery>;
export type GetCategoryNameAndIdSuspenseQueryHookResult = ReturnType<typeof useGetCategoryNameAndIdSuspenseQuery>;
export type GetCategoryNameAndIdQueryResult = Apollo.QueryResult<GetCategoryNameAndIdQuery, GetCategoryNameAndIdQueryVariables>;
export const GetProjectByCategoryDocument = gql`
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

/**
 * __useGetProjectByCategoryQuery__
 *
 * To run a query within a React component, call `useGetProjectByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectByCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetProjectByCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetProjectByCategoryQuery, GetProjectByCategoryQueryVariables> & ({ variables: GetProjectByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectByCategoryQuery, GetProjectByCategoryQueryVariables>(GetProjectByCategoryDocument, options);
      }
export function useGetProjectByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectByCategoryQuery, GetProjectByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectByCategoryQuery, GetProjectByCategoryQueryVariables>(GetProjectByCategoryDocument, options);
        }
export function useGetProjectByCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProjectByCategoryQuery, GetProjectByCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectByCategoryQuery, GetProjectByCategoryQueryVariables>(GetProjectByCategoryDocument, options);
        }
export type GetProjectByCategoryQueryHookResult = ReturnType<typeof useGetProjectByCategoryQuery>;
export type GetProjectByCategoryLazyQueryHookResult = ReturnType<typeof useGetProjectByCategoryLazyQuery>;
export type GetProjectByCategorySuspenseQueryHookResult = ReturnType<typeof useGetProjectByCategorySuspenseQuery>;
export type GetProjectByCategoryQueryResult = Apollo.QueryResult<GetProjectByCategoryQuery, GetProjectByCategoryQueryVariables>;
export const GetUserByIdDocument = gql`
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

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: AuthInputSchema!) {
  login(input: $input) {
    accessToken
    userId
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;