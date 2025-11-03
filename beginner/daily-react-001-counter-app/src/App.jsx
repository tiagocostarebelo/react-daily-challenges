import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const maxValue = 8;

  function handleDecrease() {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1)
  }

  function handleIncrease() {
    if (count === maxValue) {
      return;
    }
    setCount((prev) => prev + 1)
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

        <div class="btn-container">
          <button onClick={handleDecrease} class="btn btn-decrease">-</button>
          <div class="display">
            {count}
          </div>
          <button onClick={handleIncrease} class="btn btn-increase">+</button>
        </div>
        <button onClick={handleReset} class="btn btn-reset">Reset</button>
      </main>
    </>
  )
}

export default App
