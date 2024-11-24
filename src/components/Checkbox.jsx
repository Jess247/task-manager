function Checkbox({type, name, completed}) {
    return(
        <input type={type} name={name} checked={completed}/>
    )
}

export default Checkbox