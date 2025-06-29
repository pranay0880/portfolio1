import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React, { createContext, useMemo, useState, useContext } from "react";

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#e72a19" },
                background: { default: "#fff", paper: "#f0f0f0" },
                text: { primary: "#000", secondary: "#242424" },
                grids: { main: "#f7f7f7" },
              }
            : {
                primary: { main: "#FF4433" },
                background: { default: "#121212", paper: "#1e1e1e" },
                text: { primary: "#fff", secondary: "#ccc" },
                grids: { main: "#0d0d0d" },
              }),
        },
        typography: {
          fontFamily: "Monda, sans-serif", // default

          h1: { fontFamily: "Saira, sans-serif" },
          h2: { fontFamily: "Saira, sans-serif" },
          h3: { fontFamily: "Saira, sans-serif" },
          h4: { fontFamily: "Saira, sans-serif" },
          h5: { fontFamily: "Saira, sans-serif" },
          h6: { fontFamily: "Saira, sans-serif" },

          body1: { fontFamily: "Monda, sans-serif" },
          body2: { fontFamily: "Monda, sans-serif" },

          button: { fontFamily: "Monda, sans-serif" },
          caption: { fontFamily: "Monda, sans-serif" },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
