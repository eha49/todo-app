import React from "react";

export const AppThemeContext = React.createContext();

function AppThemeProvider({ children }) {
  const [isDark, setIsDark] = React.useState(true);

  function toggleTheme() {
    setIsDark(!isDark);
  }
  return (
    <AppThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
}

export default AppThemeProvider;
