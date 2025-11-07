import { useState } from 'react'
import SwitchToggle from './components/SwitchToggle';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleClick = () => {
    setIsLightMode(!isLightMode)
  }


  return (
    <main className={`${isLightMode ? "light-theme" : "dark-theme"}`}>
      <SwitchToggle isLightMode={isLightMode} onClick={handleClick} />
    </main>
  )
}

export default App
