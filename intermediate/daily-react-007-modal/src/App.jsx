import { useState } from 'react'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <main>

        <div >
          <button onClick={handleClick}>Click Me</button>
        </div>
        {isModalOpen && <><div className="backdrop" onClick={handleClick}></div>
          <div className="dialog">
            <h2>Modal Open</h2>
            <p>
              Closable using the "Close" button, the Esc key, or by clicking outside the
              dialog. "Light dismiss" behavior.
            </p>
            <button onClick={handleClick}>Close</button>
          </div></>}
      </main>
    </>
  )
}

export default App
