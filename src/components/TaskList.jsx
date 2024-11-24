import Task from "./Task";

function TaskList({tasks}) {
    return(
        <ul>
            {tasks.map(task => <Task task={task}/>)}
        </ul>
    )
}

export default TaskList