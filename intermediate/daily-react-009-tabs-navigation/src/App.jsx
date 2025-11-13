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
        <header className="tab-container">
          {tabsData.map(({ title }, index) => (
            <div className={`tab tab-${activeTab.title} ${activeTabTitle === title ? "active" : ""}`} key={index} onClick={() => handleTabClick(index)}>{title}</div>
          ))}
        </header>
        <div className="content-container">
          <p className={`content content-${activeTab.title}`}>{activeTab.content}</p>
        </div>
      </main>
    </>
  )
}

export default App
