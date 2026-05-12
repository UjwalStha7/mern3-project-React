import './Button.css'

function Button(props){
    return(
        <button class="glow-btn">{props.text}</button>
    )
}

export default Button;