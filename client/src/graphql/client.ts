import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const SERVER_URL = "http://localhost:4000/graphql";

// Create an http link:
const httpLink = new HttpLink({
  uri: SERVER_URL,
});

// Middleware to attach the token to the headers
const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  if (token) {
    operation.setContext({
      headers: {
        ...operation.getContext().headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  }

  return forward(operation);
});

// Combine the links
const link = authLink.concat(httpLink);

export const gqlCache = new InMemoryCache({
  addTypename: false,
});

export const apolloClient = new ApolloClient({
  link,
  cache: gqlCache,
  credentials: "include",
  connectToDevTools: true,
});
