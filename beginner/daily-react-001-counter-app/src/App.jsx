import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>
      <main>

        <div>
          <button onClick={() => setCount((prev) => prev - 1)}>-</button>
          <div>{count}</div>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        </div>
        <button onClick={() => setCount(0)}>Reset</button>
      </main>
    </>
  )
}

export default App
