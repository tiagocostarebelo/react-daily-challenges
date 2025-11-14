import { useState } from 'react';
import { tabsData } from '../data/tabsData';
import Tab from './components/Tab';
import TabPanel from './components/TabPanel';

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
        <header className="tab-container" role="tablist">
          {tabsData.map(({ title }, index) => (
            <Tab title={title} isActive={activeTabTitle === title} onClick={() => handleTabClick(index)} key={index} />
          ))}
        </header>
        <div className="content-container">
          <TabPanel activeTab={activeTab} />
        </div>
      </main>
    </>
  )
}

export default App
