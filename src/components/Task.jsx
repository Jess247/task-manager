import Checkbox from './Checkbox'
function Task({task}) {
    return(
        <li>
            <p>{task.title}</p>
            <Checkbox type="checkbox" name="checkbox" completed={task.completed}/>
        </li>
    )
}

export default Task