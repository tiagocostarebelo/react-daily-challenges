import { useState } from 'react';
import Accordion from './components/Accordion';
import { accordionData } from './data/data.js';


function App() {

  return (
    <>
      <header>
        <h1>Accordion</h1>
      </header>
      <main>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))
        }
      </main>
    </>
  )
}

export default App
