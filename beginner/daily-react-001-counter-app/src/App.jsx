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
          <div>{count}</div>
        </div>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
          <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        </div>
      </main>
    </>
  )
}

export default App
