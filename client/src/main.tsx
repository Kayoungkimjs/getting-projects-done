import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./globalStyle.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/index.ts";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql/client.ts";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
