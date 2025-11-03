import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  function handleDecrease() {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1)
  }

  function handleIncrease() {
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

        <div>
          <button onClick={handleDecrease}>-</button>
          <div>{count}</div>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button onClick={handleReset}>Reset</button>
      </main>
    </>
  )
}

export default App
