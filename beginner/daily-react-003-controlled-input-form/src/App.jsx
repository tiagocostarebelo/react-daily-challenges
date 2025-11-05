import { useState } from 'react'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {

  }

  return (
    <>
      <header>
        <h1>Controlled Input form</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor='nameInput'>Your name here</label><br />
          <input
            type="text"
            id="nameInput"
            name="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            defaultValue="Your name here"
            required /><br />

          <label htmlFor='emailInput'>Your email here</label><br />
          <input
            type="email"
            id="emailInput"
            name="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue="Your email here"
            required /><br />
          <button type="submit">Submit</button>
        </form>
        <div>
          {name && <p>{name}</p>}
          {email && <p>{email}</p>}
        </div>
      </main>
    </>
  )
}

export default App
