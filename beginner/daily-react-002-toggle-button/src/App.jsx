import { useState } from 'react'


function App() {
  const [isSwitched, setIsWitched] = useState(false);

  const handleClick = () => {
    setIsWitched(!isSwitched)
  }

  return (
    <>
      <main className={isSwitched ? "light" : ""}>
        <button
          onClick={handleClick}
          className={isSwitched ? "" : "light"}
        >{isSwitched ? "Switch Off" : "Switch On"}</button>
      </main>
    </>
  )
}

export default App
