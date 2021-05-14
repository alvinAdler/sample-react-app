import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import EmptyBanner from './components/EmptyBanner'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const initialTasks = await fetchTasks()
      setTasks(initialTasks)
    }

    getTasks()
  }, [])

  //Fetching the data (multiple)
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }

  //Fetching the data (single)
  const fetchTask = async (task_id) => {
    const res = await fetch(`http://localhost:5000/tasks/${task_id}`)
    const data = await res.json()

    return data
  }

  //Add a task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method:"POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 1000) + 1
    // const new_task = {id, ...task}

    // setTasks([...tasks, new_task])
  }
 
  // Delete a task
  const deleteTask = async (task_id) => {
    await fetch(`http://localhost:5000/tasks/${task_id}`, {
      method:"DELETE"
    })

    setTasks(tasks.filter((task) => (task.id !== task_id)))
  }

  // Toggle a task
  const toggleTask = async (task_id) => {
    const taskToToggle = await fetchTask(task_id)
    const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${task_id}`, {
      method:"PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => (task.id === task_id ? 
      {...task, reminder:data.reminder} : 
      task)))
  }

  // Toggle showAddTask
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <Router>
      <div className="container">
        <div className="holder">
          <Header onAdd={toggleShowAddTask} showAddTask={showAddTask}/>
          <Route path='/' exact render = {(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask}/>}
              {tasks.length > 0 ? 
              (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>) : 
              (<EmptyBanner/>)}
            </>
          )}/>
          <Route path="/about" component={About}/>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
