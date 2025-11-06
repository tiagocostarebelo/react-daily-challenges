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
      <header className="header">
        <h1 className="logo">Check your Hex</h1>
      </header>
      <main>
        <div className="container">
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
            {hexValue && <div className="color-box" style={{ backgroundColor: hexValue }}>

            </div>}
          </div>
        </div>

      </main>
    </>
  )
}

export default App
