import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '../src/context/ThemeContext.jsx';
import { UserProvider } from '../src/context/UserContext';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <UserProvider>
      <App/>
    </UserProvider>
  </ThemeProvider>
)
