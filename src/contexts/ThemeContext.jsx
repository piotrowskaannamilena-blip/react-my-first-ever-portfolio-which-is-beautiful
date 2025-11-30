// import React, { createContext, useState } from "react";

// // Create the context
// export const ThemeContext = createContext();

// // Theme provider component
// export function ThemeProvider({ children }) {
//   const [themeColor, setThemeColor] = useState("#ffffff"); // Default theme color is white

//   const changeTheme = (color) => {
//     setThemeColor(color);
//   };

//   return (
//     <ThemeContext.Provider value={{ themeColor, changeTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
import { createContext, useEffect, useState, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

