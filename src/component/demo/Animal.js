import "./Animal.css"
const Animal = (props) => {
    return (
        <div className="container">
            <div className="name">{props.name}</div>
            <div className="name">{props.age} month</div>
            <div className="name">color : {props.color}</div>
        </div>
    )
}

export default Animal;