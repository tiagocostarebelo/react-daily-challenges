import { useState } from 'react'


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [submittedData, setSubmittedData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in both fields');
      return;
    }

    setSubmittedData(formData);

    //reset form after submission
    setFormData({ name: '', email: '' })
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
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required /><br />

          <label htmlFor='emailInput'>Your email here</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required /><br />
          <button type="submit">Submit</button>
        </form>
        {submittedData && (
          <div className="preview">
            <h3>Submitted Data</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
