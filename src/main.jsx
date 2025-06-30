import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
