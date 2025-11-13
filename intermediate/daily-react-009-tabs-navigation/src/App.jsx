import { useState } from 'react';
import { tabsData } from '../data/tabsData';

function App() {
  const [isTabActive, setIsTabActive] = useState("English");

  const handleTabClick = (index) => {
    setIsTabActive(tabsData[index].title)
  }

  return (
    <>
      <header>
        <h1>Tabs Navigation</h1>
      </header>
      <main>
        <header>
          {tabsData.map(({ title, content }, index) => (
            <div key={index} onClick={() => handleTabClick(index)}>{title}</div>
          ))}
        </header>
        <div>
          <p>Text renders here according to the active tab title. Defaults to English.</p>
        </div>
      </main>
    </>
  )
}

export default App
