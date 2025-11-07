import { useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function App() {
  const [switchLD, setSwitchLD] = useState(true);

  const handleClick = () => {
    setSwitchLD(!switchLD)
  }


  return (
    <main>
      <div className="switch-container">
        <div className="switch">
          <CiLight className={`switch-light ${switchLD ? "active" : ""}`} onClick={handleClick} />
          <MdDarkMode className={`switch-dark ${!switchLD ? "active" : ""}`} onClick={handleClick} />
        </div>
      </div>
    </main>
  )
}

export default App
