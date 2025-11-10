import { useState } from 'react'


function App() {
  //collect input data 
  const [taskDetails, setTaskDetails] = useState({
    taskName: '',
    taskDescription: '',
  });
  //store tasks
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails(prev => ({ ...prev, [name]: value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskDetails.taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskDetails.taskName,
      description: taskDetails.taskDescription,
      completed: false
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskDetails({ taskName: '', taskDescription: '' });
    console.log(tasks)
  }

  const handleToggle = (id) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  return (
    <>
      <header>
        <h1>ToDo Tracker</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor='taskName'>Task Name</label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={taskDetails.taskName}
            onChange={handleChange}
            placeholder='Task Name'
          />

          <label htmlFor='taskDescription'>Task Description</label>
          <input
            type="text"
            id="taskDescription"
            name="taskDescription"
            value={taskDetails.taskDescription}
            onChange={handleChange}
            placeholder='Task Description'
          />
          <button type="submit">Submit</button>
        </form>

        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span className={`${task.completed ? 'completed' : ''}`}>{task.name}</span>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
