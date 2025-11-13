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
          {tabsData.map(({ title }, index) => (
            <div className={`tab ${isTabActive === title ? "active" : ""}`} key={index} onClick={() => handleTabClick(index)}>{title}</div>
          ))}
        </header>
        <div>

        </div>
      </main>
    </>
  )
}

export default App
