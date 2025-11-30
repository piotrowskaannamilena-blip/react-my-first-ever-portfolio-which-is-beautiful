// display component reads the themeColor from the ThemeContext

import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Display() {
  const { themeColor } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: themeColor, padding: '0px', color: '#fff', textAlign: 'center' }}>
      <p>Theme: {themeColor}</p>
    </div>
  );
}

export default Display;
