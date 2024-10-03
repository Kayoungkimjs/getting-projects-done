import { ApolloClient, InMemoryCache } from "@apollo/client";

const SERVER_URL = "http://localhost:4000/graphql";

export const gqlCache = new InMemoryCache({
  addTypename: false,
});

export const apolloClient = new ApolloClient({
  uri: SERVER_URL,
  cache: gqlCache,
  connectToDevTools: true,
});
