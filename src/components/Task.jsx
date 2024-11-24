function Task({task}) {
    return(
        <div>
            <p>{task.title}</p>
            <Checkbox type="checkbox" name="checkbox" completed={task.completed}/>
        </div>
    )
}

export default Task