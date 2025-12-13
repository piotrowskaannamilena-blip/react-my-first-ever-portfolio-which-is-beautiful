import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button htmlFor="themeColor" id= "themeToggleBtn" aria-label="Aria theme selector light and dark theme" onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "light" ? <FaMoon size={17} /> : <FaSun size={17} />}
    </button>
  );
};

export default ThemeToggle;