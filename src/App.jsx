import './App.css'
import Task  from './components/Task'
import Button from './components/Button'

function App() {
  const task = {id:1, title:'Hello world', completed: false}

  const handleClick = () => {
    console.log('clicked')
}

  return (
    <>
      <Task task={task}/>
      <Button handleClick={handleClick} text={'click'}/>   
    </>
  )
}

export default App
