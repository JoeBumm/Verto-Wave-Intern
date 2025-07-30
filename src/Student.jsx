
function student(props) {
    return (
        <div className="student">
            <p>Company: {props.name} </p>
            <p>Location: {props.location}</p>
        </div>
    )
}

export default student