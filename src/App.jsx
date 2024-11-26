import './App.css'
import Button from './components/Button'
import TaskList from './components/TaskList'
import Header from './components/Header'

function App() {
  const tasks = [
      {
        id:1, title:'Hello world', completed: false
      },
      {
        id:2, title:'good afternoon world', completed: false
      },
      {
        id:3, title:'good night world', completed: false
      }
    ]

    const navLinks = [
      {
          name:'Tasks',
          url:'/tasks'
      },
      {
          name:'Completed',
          url:'/completed'
      },
  ]


  const handleClick = () => {
    console.log('clicked')
}

  return (
    <>
      <Header navLinks={navLinks} />
      <TaskList tasks={tasks}/>
      <Button handleClick={handleClick} text={'click'}/>   
    </>
  )
}

export default App
