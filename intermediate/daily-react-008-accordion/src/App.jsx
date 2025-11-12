import { useState } from 'react'


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
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title" onClick={handleClick}>
              <div>{accordionData.title}</div>
              <div>+</div>
            </div>
            {isOpen && <div className="accordion-content">{accordionData.content}</div>}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
