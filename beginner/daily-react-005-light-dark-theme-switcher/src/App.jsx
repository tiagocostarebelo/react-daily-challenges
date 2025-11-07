import { useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleClick = () => {
    setIsLightMode(!isLightMode)
  }


  return (
    <main className={`${isLightMode ? "light-theme" : "dark-theme"}`}>
      <div className="switch-container">
        <div className="switch">
          <CiLight className={`switch-light ${isLightMode ? "active" : ""}`} onClick={handleClick} />
          <MdDarkMode className={`switch-dark ${!isLightMode ? "active" : ""}`} onClick={handleClick} />
        </div>
      </div>
    </main>
  )
}

export default App
