import { useState } from 'react';
import Modal from './components/Modal';

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
        {isModalOpen && <Modal onClick={handleClick} />}
      </main>
    </>
  )
}

export default App
