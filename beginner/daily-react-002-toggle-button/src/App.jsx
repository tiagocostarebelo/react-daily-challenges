import { useState } from 'react';
import Button from './components/Button';


function App() {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleClick = () => setIsSwitched(!isSwitched);


  return (
    <>
      <main className={isSwitched ? "light" : ""}>
        <Button
          onClick={handleClick}
          isSwitched={isSwitched}
        >{isSwitched}</Button>
      </main>
    </>
  )
}

export default App
