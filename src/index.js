import { createTheme, CssBaseline, ThemeProvider, colors } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeMode } from "./constants";

import "./styles.css";

const themeMode = ThemeMode.LIGHT;

const lightTheme = createTheme({
  typography: {
    button: {
      color: "#fff",
    },
  },
  palette: {
    mode: "light",
    background: {
      default: "#DFDFDF",
    },
    primary: {
      main: colors.green[500],
    },
  },
});

const darkTheme = createTheme({
  typography: {
    button: {
      color: "#fff",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: colors.green[500],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme}
    >
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
