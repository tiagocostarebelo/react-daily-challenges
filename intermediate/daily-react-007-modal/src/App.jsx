import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <main>

        <div >
          <button onClick={() => setIsModalOpen(true)}>Click Me</button>
        </div>
        {isModalOpen && (
          <Modal onClose={() => { setIsModalOpen(false) }}>
            <h2>Modal Open</h2>
            <p>This is modal canbe closed by clicking outside or pressing Esc</p>
          </Modal>)}
      </main>
    </>
  )
}

export default App
