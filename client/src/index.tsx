import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ChakraProvider } from "@chakra-ui/react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { store } from "./store";

import "./index.css";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#389583", // #57be6c //#004c23 //#389583
    },
    secondary: {
      main: "#801348",
    },
    // secondary: {
    //   light: pink[200],
    //   main: pink[700],
    //   dark: pink[900],
    // },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
