import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import EmptyBanner from './components/EmptyBanner'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  //Add a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const new_task = {id, ...task}

    setTasks([...tasks, new_task])
    console.log(tasks)
  }
 
  // Delete a task
  const deleteTask = (task_id) => {
    console.log(task_id)
    setTasks(tasks.filter((task) => (task.id !== task_id)))
  }

  // Toggle a task
  const toggleTask = (task_id) => {
    setTasks(tasks.map((task) => (task.id === task_id ? 
      {...task, reminder:!task.reminder} : 
      task)))
  }

  // Toggle showAddTask
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <div className="holder">
        <Header onAdd={toggleShowAddTask} showAddTask={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>) : 
        (<EmptyBanner/>)}
      </div>
    </div>
  );
}

export default App;
