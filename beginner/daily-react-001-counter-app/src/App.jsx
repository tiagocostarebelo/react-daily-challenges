import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const MAX_VALUE = 8;

  function handleDecrease() {

    setCount((prev) => prev > 0 ? prev - 1 : prev)
  }

  function handleIncrease() {

    setCount((prev) => prev < MAX_VALUE ? prev + 1 : prev)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>
      <main>

        <div className="btn-container">
          <button
            onClick={handleDecrease}
            className="btn btn-decrease"
            disabled={count === 0}>-</button>
          <div className="display">
            {count}
          </div>
          <button
            onClick={handleIncrease}
            className="btn btn-increase"
            disabled={count === MAX_VALUE}>+</button>
        </div>
        <button
          onClick={handleReset}
          className="btn btn-reset">Reset</button>
      </main>
    </>
  )
}

export default App
