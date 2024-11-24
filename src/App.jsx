import './App.css'
import Task  from './components/Task'
import Button from './components/Button'
import TaskList from './components/TaskList'

function App() {
  const tasks = [
      {
        id:1, title:'Hello world', completed: false
      },
      {
        id:2, title:'good afternoom world', completed: false
      },
      {
        id:3, title:'good night world', completed: false
      }
    ]

  const handleClick = () => {
    console.log('clicked')
}

  return (
    <>
      <TaskList tasks={tasks}/>
      <Button handleClick={handleClick} text={'click'}/>   
    </>
  )
}

export default App
