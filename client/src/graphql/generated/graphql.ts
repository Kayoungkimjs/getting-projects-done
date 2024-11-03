import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthInputSchema = {
  password: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type CreateProjectSchema = {
  categoryId?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  projectName?: InputMaybe<Scalars["String"]["input"]>;
};

export type GetAllProjectsResponseSchema = {
  __typename?: "GetAllProjectsResponseSchema";
  listLength?: Maybe<Scalars["Float"]["output"]>;
  project: Array<ProjectSchema>;
};

export type GetCategoryNameAndIdResponeSchema = {
  __typename?: "GetCategoryNameAndIdResponeSchema";
  categoryEn: Scalars["String"]["output"];
  categoryId: Scalars["Float"]["output"];
};

export type GetProjectByCategoryResponseSchema = {
  __typename?: "GetProjectByCategoryResponseSchema";
  listLength?: Maybe<Scalars["Float"]["output"]>;
  project: Array<ProjectSchema>;
};

export type GetProjectByIdResponseSchema = {
  __typename?: "GetProjectByIdResponseSchema";
  project: Array<ProjectSchema>;
};

export type GetRegistersByUserIdResponseSchema = {
  __typename?: "GetRegistersByUserIdResponseSchema";
  registers?: Maybe<Array<RegisterResponse>>;
};

export type LoginInputSchema = {
  accessToken: Scalars["String"]["input"];
  email?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["String"]["input"];
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type LoginSchema = {
  __typename?: "LoginSchema";
  accessToken: Scalars["String"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["String"]["output"];
  username?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  login: LoginSchema;
  registerProject: RegisterResponse;
};

export type MutationLoginArgs = {
  input: AuthInputSchema;
};

export type MutationRegisterProjectArgs = {
  input: CreateProjectSchema;
};

export type ProjectInputSchema = {
  categoryEn?: InputMaybe<Scalars["String"]["input"]>;
  categoryId: Scalars["Float"]["input"];
  categoryKr?: InputMaybe<Scalars["String"]["input"]>;
  criteria?: InputMaybe<Scalars["String"]["input"]>;
  endpoint?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  priority?: InputMaybe<Scalars["Float"]["input"]>;
  projectId: Scalars["Float"]["input"];
  result?: InputMaybe<Scalars["Float"]["input"]>;
  status?: InputMaybe<Scalars["Float"]["input"]>;
  testName?: InputMaybe<Scalars["String"]["input"]>;
  testType?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectSchema = {
  __typename?: "ProjectSchema";
  categoryEn?: Maybe<Scalars["String"]["output"]>;
  categoryId: Scalars["Float"]["output"];
  categoryKr?: Maybe<Scalars["String"]["output"]>;
  criteria?: Maybe<Scalars["String"]["output"]>;
  endpoint?: Maybe<Scalars["String"]["output"]>;
  notes?: Maybe<Scalars["String"]["output"]>;
  priority?: Maybe<Scalars["Float"]["output"]>;
  projectId: Scalars["Float"]["output"];
  result?: Maybe<Scalars["Float"]["output"]>;
  status?: Maybe<Scalars["Float"]["output"]>;
  testName?: Maybe<Scalars["String"]["output"]>;
  testType?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  getAllProjects: GetAllProjectsResponseSchema;
  getCategoryNameAndId: Array<GetCategoryNameAndIdResponeSchema>;
  getProjectByCategory: GetProjectByCategoryResponseSchema;
  getProjectById: GetProjectByIdResponseSchema;
  getRegistersByUserId: GetRegistersByUserIdResponseSchema;
  getUserById: UserSchema;
};

export type QueryGetProjectByCategoryArgs = {
  categoryId: Array<Scalars["Float"]["input"]>;
};

export type QueryGetProjectByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryGetUserByIdArgs = {
  userId: Scalars["String"]["input"];
};

export type RegisterInputSchema = {
  categoryId?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  projectName?: InputMaybe<Scalars["String"]["input"]>;
  registerId: Scalars["Float"]["input"];
  user: UserInputSchema;
};

export type RegisterResponse = {
  __typename?: "RegisterResponse";
  categoryId?: Maybe<Array<Scalars["String"]["output"]>>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  projectName?: Maybe<Scalars["String"]["output"]>;
  registerId: Scalars["Float"]["output"];
  user: UserSchema;
};

export type UserInputSchema = {
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  register: Array<RegisterInputSchema>;
  uid: Scalars["Float"]["input"];
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["String"]["input"];
};

export type UserSchema = {
  __typename?: "UserSchema";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  password: Scalars["String"]["output"];
  register: Array<RegisterResponse>;
  uid: Scalars["Float"]["output"];
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["String"]["output"];
};

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProjectsQuery = {
  __typename?: "Query";
  getAllProjects: {
    __typename?: "GetAllProjectsResponseSchema";
    listLength?: number | null;
    project: Array<{
      __typename?: "ProjectSchema";
      projectId: number;
      categoryId: number;
      categoryKr?: string | null;
      categoryEn?: string | null;
      endpoint?: string | null;
      testType?: string | null;
      testName?: string | null;
      criteria?: string | null;
      notes?: string | null;
      result?: number | null;
      status?: number | null;
      priority?: number | null;
    }>;
  };
};

export type GetCategoryNameAndIdQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCategoryNameAndIdQuery = {
  __typename?: "Query";
  getCategoryNameAndId: Array<{
    __typename?: "GetCategoryNameAndIdResponeSchema";
    categoryEn: string;
    categoryId: number;
  }>;
};

export type GetProjectByCategoryQueryVariables = Exact<{
  categoryId: Array<Scalars["Float"]["input"]> | Scalars["Float"]["input"];
}>;

export type GetProjectByCategoryQuery = {
  __typename?: "Query";
  getProjectByCategory: {
    __typename?: "GetProjectByCategoryResponseSchema";
    listLength?: number | null;
    project: Array<{
      __typename?: "ProjectSchema";
      projectId: number;
      categoryId: number;
      categoryKr?: string | null;
      categoryEn?: string | null;
      endpoint?: string | null;
      testType?: string | null;
      testName?: string | null;
      criteria?: string | null;
      notes?: string | null;
      result?: number | null;
      status?: number | null;
      priority?: number | null;
    }>;
  };
};

export type GetProjectByIdQueryVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type GetProjectByIdQuery = {
  __typename?: "Query";
  getProjectById: {
    __typename?: "GetProjectByIdResponseSchema";
    project: Array<{
      __typename?: "ProjectSchema";
      projectId: number;
      categoryId: number;
      categoryKr?: string | null;
      categoryEn?: string | null;
      endpoint?: string | null;
      testType?: string | null;
      testName?: string | null;
      criteria?: string | null;
      notes?: string | null;
      result?: number | null;
      status?: number | null;
      priority?: number | null;
    }>;
  };
};

export type GetRegistersByUserIdQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetRegistersByUserIdQuery = {
  __typename?: "Query";
  getRegistersByUserId: {
    __typename?: "GetRegistersByUserIdResponseSchema";
    registers?: Array<{
      __typename?: "RegisterResponse";
      registerId: number;
      projectName?: string | null;
      description?: string | null;
      categoryId?: Array<string> | null;
      createdAt?: string | null;
    }> | null;
  };
};

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars["String"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  getUserById: {
    __typename?: "UserSchema";
    uid: number;
    userId: string;
    password: string;
    email?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  };
};

export type LoginMutationVariables = Exact<{
  input: AuthInputSchema;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: { __typename?: "LoginSchema"; accessToken: string; userId: string };
};

export type RegisterProjectMutationVariables = Exact<{
  input: CreateProjectSchema;
}>;

export type RegisterProjectMutation = {
  __typename?: "Mutation";
  registerProject: {
    __typename?: "RegisterResponse";
    registerId: number;
    projectName?: string | null;
    description?: string | null;
    categoryId?: Array<string> | null;
    createdAt?: string | null;
    user: { __typename?: "UserSchema"; uid: number; userId: string };
  };
};

export const GetAllProjectsDocument = gql`
  query GetAllProjects {
    getAllProjects {
      project {
        projectId
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
export function useGetAllProjectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(
    GetAllProjectsDocument,
    options,
  );
}
export function useGetAllProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(
    GetAllProjectsDocument,
    options,
  );
}
export function useGetAllProjectsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllProjectsQuery,
        GetAllProjectsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >(GetAllProjectsDocument, options);
}
export type GetAllProjectsQueryHookResult = ReturnType<
  typeof useGetAllProjectsQuery
>;
export type GetAllProjectsLazyQueryHookResult = ReturnType<
  typeof useGetAllProjectsLazyQuery
>;
export type GetAllProjectsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllProjectsSuspenseQuery
>;
export type GetAllProjectsQueryResult = Apollo.QueryResult<
  GetAllProjectsQuery,
  GetAllProjectsQueryVariables
>;
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
export function useGetCategoryNameAndIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoryNameAndIdQuery,
    GetCategoryNameAndIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCategoryNameAndIdQuery,
    GetCategoryNameAndIdQueryVariables
  >(GetCategoryNameAndIdDocument, options);
}
export function useGetCategoryNameAndIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoryNameAndIdQuery,
    GetCategoryNameAndIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCategoryNameAndIdQuery,
    GetCategoryNameAndIdQueryVariables
  >(GetCategoryNameAndIdDocument, options);
}
export function useGetCategoryNameAndIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCategoryNameAndIdQuery,
        GetCategoryNameAndIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCategoryNameAndIdQuery,
    GetCategoryNameAndIdQueryVariables
  >(GetCategoryNameAndIdDocument, options);
}
export type GetCategoryNameAndIdQueryHookResult = ReturnType<
  typeof useGetCategoryNameAndIdQuery
>;
export type GetCategoryNameAndIdLazyQueryHookResult = ReturnType<
  typeof useGetCategoryNameAndIdLazyQuery
>;
export type GetCategoryNameAndIdSuspenseQueryHookResult = ReturnType<
  typeof useGetCategoryNameAndIdSuspenseQuery
>;
export type GetCategoryNameAndIdQueryResult = Apollo.QueryResult<
  GetCategoryNameAndIdQuery,
  GetCategoryNameAndIdQueryVariables
>;
export const GetProjectByCategoryDocument = gql`
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
export function useGetProjectByCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProjectByCategoryQuery,
    GetProjectByCategoryQueryVariables
  > &
    (
      | { variables: GetProjectByCategoryQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProjectByCategoryQuery,
    GetProjectByCategoryQueryVariables
  >(GetProjectByCategoryDocument, options);
}
export function useGetProjectByCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectByCategoryQuery,
    GetProjectByCategoryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProjectByCategoryQuery,
    GetProjectByCategoryQueryVariables
  >(GetProjectByCategoryDocument, options);
}
export function useGetProjectByCategorySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetProjectByCategoryQuery,
        GetProjectByCategoryQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetProjectByCategoryQuery,
    GetProjectByCategoryQueryVariables
  >(GetProjectByCategoryDocument, options);
}
export type GetProjectByCategoryQueryHookResult = ReturnType<
  typeof useGetProjectByCategoryQuery
>;
export type GetProjectByCategoryLazyQueryHookResult = ReturnType<
  typeof useGetProjectByCategoryLazyQuery
>;
export type GetProjectByCategorySuspenseQueryHookResult = ReturnType<
  typeof useGetProjectByCategorySuspenseQuery
>;
export type GetProjectByCategoryQueryResult = Apollo.QueryResult<
  GetProjectByCategoryQuery,
  GetProjectByCategoryQueryVariables
>;
export const GetProjectByIdDocument = gql`
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
        notes
        result
        status
        priority
      }
    }
  }
`;

/**
 * __useGetProjectByIdQuery__
 *
 * To run a query within a React component, call `useGetProjectByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  > &
    (
      | { variables: GetProjectByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProjectByIdQuery, GetProjectByIdQueryVariables>(
    GetProjectByIdDocument,
    options,
  );
}
export function useGetProjectByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProjectByIdQuery, GetProjectByIdQueryVariables>(
    GetProjectByIdDocument,
    options,
  );
}
export function useGetProjectByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetProjectByIdQuery,
        GetProjectByIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >(GetProjectByIdDocument, options);
}
export type GetProjectByIdQueryHookResult = ReturnType<
  typeof useGetProjectByIdQuery
>;
export type GetProjectByIdLazyQueryHookResult = ReturnType<
  typeof useGetProjectByIdLazyQuery
>;
export type GetProjectByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetProjectByIdSuspenseQuery
>;
export type GetProjectByIdQueryResult = Apollo.QueryResult<
  GetProjectByIdQuery,
  GetProjectByIdQueryVariables
>;
export const GetRegistersByUserIdDocument = gql`
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

/**
 * __useGetRegistersByUserIdQuery__
 *
 * To run a query within a React component, call `useGetRegistersByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegistersByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegistersByUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRegistersByUserIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRegistersByUserIdQuery,
    GetRegistersByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRegistersByUserIdQuery,
    GetRegistersByUserIdQueryVariables
  >(GetRegistersByUserIdDocument, options);
}
export function useGetRegistersByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRegistersByUserIdQuery,
    GetRegistersByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRegistersByUserIdQuery,
    GetRegistersByUserIdQueryVariables
  >(GetRegistersByUserIdDocument, options);
}
export function useGetRegistersByUserIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetRegistersByUserIdQuery,
        GetRegistersByUserIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetRegistersByUserIdQuery,
    GetRegistersByUserIdQueryVariables
  >(GetRegistersByUserIdDocument, options);
}
export type GetRegistersByUserIdQueryHookResult = ReturnType<
  typeof useGetRegistersByUserIdQuery
>;
export type GetRegistersByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetRegistersByUserIdLazyQuery
>;
export type GetRegistersByUserIdSuspenseQueryHookResult = ReturnType<
  typeof useGetRegistersByUserIdSuspenseQuery
>;
export type GetRegistersByUserIdQueryResult = Apollo.QueryResult<
  GetRegistersByUserIdQuery,
  GetRegistersByUserIdQueryVariables
>;
export const GetUserByIdDocument = gql`
  query GetUserById($userId: String!) {
    getUserById(userId: $userId) {
      uid
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
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  > &
    (
      | { variables: GetUserByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export function useGetUserByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserByIdQuery,
        GetUserByIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetUserByIdSuspenseQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($input: AuthInputSchema!) {
    login(input: $input) {
      accessToken
      userId
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

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
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterProjectDocument = gql`
  mutation RegisterProject($input: CreateProjectSchema!) {
    registerProject(input: $input) {
      registerId
      projectName
      description
      categoryId
      createdAt
      user {
        uid
        userId
      }
    }
  }
`;
export type RegisterProjectMutationFn = Apollo.MutationFunction<
  RegisterProjectMutation,
  RegisterProjectMutationVariables
>;

/**
 * __useRegisterProjectMutation__
 *
 * To run a mutation, you first call `useRegisterProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerProjectMutation, { data, loading, error }] = useRegisterProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterProjectMutation,
    RegisterProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterProjectMutation,
    RegisterProjectMutationVariables
  >(RegisterProjectDocument, options);
}
export type RegisterProjectMutationHookResult = ReturnType<
  typeof useRegisterProjectMutation
>;
export type RegisterProjectMutationResult =
  Apollo.MutationResult<RegisterProjectMutation>;
export type RegisterProjectMutationOptions = Apollo.BaseMutationOptions<
  RegisterProjectMutation,
  RegisterProjectMutationVariables
>;
