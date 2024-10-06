import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'
import UserProfile from './components/UserProfile'
import '../src/styles/styles.css'
import { ThemeContext } from '../src/context/ThemeContext';
import React, { useContext } from 'react';


function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div  className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <ThemeToggleButton/>
      <UserProfile/>
    </div>
  )
}

export default App
