import { useState } from 'react';
import { tabsData } from '../data/tabsData';

function App() {
  const [activeTabTitle, setActiveTabTitle] = useState("English");
  const activeTab = tabsData.find(tab => tab.title === activeTabTitle);

  const handleTabClick = (index) => {
    setActiveTabTitle(tabsData[index].title)
  }

  return (
    <>
      <header>
        <h1>Tabs Navigation</h1>
      </header>
      <main>
        <header>
          {tabsData.map(({ title }, index) => (
            <div className={`tab ${activeTabTitle === title ? "active" : ""}`} key={index} onClick={() => handleTabClick(index)}>{title}</div>
          ))}
        </header>
        <div>
          <p>{activeTab.content}</p>
        </div>
      </main>
    </>
  )
}

export default App
