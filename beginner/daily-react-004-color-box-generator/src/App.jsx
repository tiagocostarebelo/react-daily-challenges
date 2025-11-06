import { useState } from 'react'

function App() {
  const [hexValue, setHexValue] = useState('');

  const handleChange = (e) => {
    setHexValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <header>
        <h1>Check your Hex</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="hexInput">Hex value</label>
          <input
            type="text"
            id="hexInput"
            name="hex"
            value={hexValue}
            onChange={handleChange}
            placeholder='Enter your hex code'
            required
          />
        </form>
        <div>
          <div className="color-box" style={{ backgroundColor: hexValue }}></div>
        </div>
      </main>
    </>
  )
}

export default App
