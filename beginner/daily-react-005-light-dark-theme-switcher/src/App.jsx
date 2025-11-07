import { useState, useEffect } from 'react'
import SwitchToggle from './components/SwitchToggle';

function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem('themePreference'));
    return savedTheme !== null ? savedTheme : true;
  });

  const handleClick = () => {
    setIsLightMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('themePreference', JSON.stringify(isLightMode));
  }, [isLightMode]);


  return (
    <main className={`${isLightMode ? "light-theme" : "dark-theme"}`}>
      <SwitchToggle isLightMode={isLightMode} onClick={handleClick} />
    </main>
  )
}

export default App
