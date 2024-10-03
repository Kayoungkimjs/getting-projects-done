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

export type GetProjectByCategoryResponseSchema = {
  __typename?: "GetProjectByCategoryResponseSchema";
  listLength?: Maybe<Scalars["Float"]["output"]>;
  project: Array<ProjectSchema>;
};

export type ProjectInputSchema = {
  categoryEn: Scalars["String"]["input"];
  categoryId: Scalars["Float"]["input"];
  categoryKr: Scalars["String"]["input"];
  criteria: Scalars["String"]["input"];
  endpoint: Scalars["String"]["input"];
  id: Scalars["Float"]["input"];
  notes?: InputMaybe<Scalars["String"]["input"]>;
  priority?: InputMaybe<Scalars["Float"]["input"]>;
  result?: InputMaybe<Scalars["Float"]["input"]>;
  status?: InputMaybe<Scalars["Float"]["input"]>;
  testName: Scalars["String"]["input"];
  testType: Scalars["String"]["input"];
};

export type ProjectSchema = {
  __typename?: "ProjectSchema";
  categoryEn: Scalars["String"]["output"];
  categoryId: Scalars["Float"]["output"];
  categoryKr: Scalars["String"]["output"];
  criteria: Scalars["String"]["output"];
  endpoint: Scalars["String"]["output"];
  id: Scalars["Float"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  priority?: Maybe<Scalars["Float"]["output"]>;
  result?: Maybe<Scalars["Float"]["output"]>;
  status?: Maybe<Scalars["Float"]["output"]>;
  testName: Scalars["String"]["output"];
  testType: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  getProjectByCategory: GetProjectByCategoryResponseSchema;
};

export type QueryGetProjectByCategoryArgs = {
  categoryId: Scalars["Float"]["input"];
};

export type GetProjectByCategoryQueryVariables = Exact<{
  categoryId: Scalars["Float"]["input"];
}>;

export type GetProjectByCategoryQuery = {
  __typename?: "Query";
  getProjectByCategory: {
    __typename?: "GetProjectByCategoryResponseSchema";
    listLength?: number | null;
    project: Array<{
      __typename?: "ProjectSchema";
      id: number;
      categoryId: number;
      categoryKr: string;
      categoryEn: string;
      endpoint: string;
      testType: string;
      testName: string;
      criteria: string;
      notes?: string | null;
      result?: number | null;
      status?: number | null;
      priority?: number | null;
    }>;
  };
};

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
