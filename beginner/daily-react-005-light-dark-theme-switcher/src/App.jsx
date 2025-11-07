import { useState, useEffect } from 'react'
import SwitchToggle from './components/SwitchToggle';
import useTheme from './hooks/useTheme';

function App() {
  const { isLightMode, handleClick } = useTheme();

  return (
    <main className={`${isLightMode ? "light-theme" : "dark-theme"}`}>
      <SwitchToggle isLightMode={isLightMode} onClick={handleClick} />
    </main>
  )
}

export default App
