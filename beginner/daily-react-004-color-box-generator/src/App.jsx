import { useState } from 'react'
import Header from './components/Header';
import ColorInput from './components/ColorInput';
import ColorBox from './components/ColorBox';

function App() {
  const [hexValue, setHexValue] = useState('');

  const handleChange = (e) => {
    setHexValue(prev => e.target.value);
  }

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ColorInput value={hexValue} onChange={handleChange} />
          <ColorBox color={hexValue} />
        </div>

      </main>
    </>
  )
}

export default App
