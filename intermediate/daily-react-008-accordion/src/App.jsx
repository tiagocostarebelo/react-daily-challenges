import { useState } from 'react';
import Accordion from './components/Accordion';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <h1>Accordion</h1>
      </header>
      <main>
        <Accordion accordionData={accordionData} onClick={handleClick} isOpen={isOpen} />
      </main>
    </>
  )
}

export default App
