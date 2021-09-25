import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ChakraProvider } from "@chakra-ui/react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

import { store } from "./store";

import "./index.css";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004c23",
    },
    secondary: {
      main: "#b39e00",
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
