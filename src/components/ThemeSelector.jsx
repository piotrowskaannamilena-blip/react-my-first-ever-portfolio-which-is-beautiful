// import React, { useContext } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// function ThemeSelector() {
//   const { changeTheme } = useContext(ThemeContext);

//   const handleColorChange = (e) => {
//     changeTheme(e.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="themeColor">Choose Theme Color: </label>
//       <input
//         type="color"
//         id="themeColor"
//         onChange={handleColorChange}
//       />
//     </div>
//   );
// }

// export default ThemeSelector;


import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "light" ? <FaMoon size={17} /> : <FaSun size={17} />}
    </button>
  );
};

export default ThemeToggle;