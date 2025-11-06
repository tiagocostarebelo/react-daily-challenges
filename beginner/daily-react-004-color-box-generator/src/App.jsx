import { useState } from 'react'
import Header from './components/Header';
import ColorInput from './components/ColorInput';
import ColorBox from './components/ColorBox';
import ColorDisplay from './components/ColorDisplay';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  const [hexValue, setHexValue] = useState('');
  const [rgbValue, setRgbValue] = useState([]);

  const handleChange = (e) => {
    const newHex = e.target.value.trim();
    setHexValue(newHex);

    if (!newHex) {
      setRgbValue({});
      return;
    }

    if (/^#([A-Fa-f0-9]{3}){1,2}$/i.test(newHex)) {
      hexToRgb(newHex);
    } else {
      setRgbValue([]);
    }
  };

  const hexToRgb = (hex) => {

    // if the input is the Hexa code short form
    if (hex.length <= 4) {
      let r = hex.slice(1, 2);
      let g = hex.slice(2, 3);
      let b = hex.slice(3, 4);

      r = parseInt(r + r, 16);
      g = parseInt(g + g, 16);
      b = parseInt(b + b, 16);

      setRgbValue([r, g, b]);
    } else {
      //if the input is the long form
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);
      setRgbValue([r, g, b]);
    }
  };

  const handleClick = (e) => {
    e.preventDefault;
    setHexValue('');
    setRgbValue([]);
  }

  const handleGenerateRandomColor = () => {
    const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    setHexValue(randomHex);
    hexToRgb(randomHex);
  }

  return (
    <>
      <Header />
      <main>
        <Button
          variant="generate"
          type="button"
          onClick={handleGenerateRandomColor}
        >
          Generate Random Color
        </Button>
        <div className="container">
          <div>

          </div>
          <ColorInput value={hexValue} onChange={handleChange} />
          <ColorDisplay rgbValue={rgbValue} />


          <ColorBox color={hexValue} />
          {hexValue &&
            <Button
              variant="clear"
              type="button"
              onClick={handleClick}>
              Clear
            </Button>}
        </div>

      </main>
      <Footer />
    </>
  )
}

export default App
