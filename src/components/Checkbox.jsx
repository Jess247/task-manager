function Checkbox({type, name, completed}) {
    return(
            <input type={type} name={name} aria-label={name} checked={completed} onChange={() => {}} />
    )
}

export default Checkbox