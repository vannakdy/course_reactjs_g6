const Button = (props) => {
    
    // "success" , "delete"
    return (
        <button className={props.type}>
            {props.title}
        </button>
    )
}

export default Button;
