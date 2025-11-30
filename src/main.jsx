import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./contexts/ThemeContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // ThemeProvider themecontext wraps the whole app
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)
