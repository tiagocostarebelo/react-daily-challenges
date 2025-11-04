import { useState } from 'react';
import Button from './components/Button';


function App() {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleClick = () => setIsSwitched(!isSwitched);


  return (
    <>
      <main className={isSwitched ? "light" : "dark"}>
        <Button
          onClick={handleClick}
          isSwitched={isSwitched}
        />
      </main>
    </>
  )
}

export default App
