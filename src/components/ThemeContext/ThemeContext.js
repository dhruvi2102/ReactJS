import { createContext, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" }, // Blue
    secondary: { main: "#f50057" }, // Pink
    background: { default: "#f5f5f5", paper: "#ffffff" },
    text: { primary: "#000000", secondary: "#333333" },
    footer: { main: "#1976d2" }, // Light gray footer
    navbar: { main: "#1976d2" },
    drawer: { main: "#1976d2" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" }, // Light Blue
    secondary: { main: "#ff4081" }, // Pink
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#cccccc" },
    footer: { main: "#1e1e1e" }, // Dark footer
    navbar: { main: "#333333" },
    drawer: { main: "#1e1e1e" },
  },
});

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
