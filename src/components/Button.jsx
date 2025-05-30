
function Button({text, onClick}) {
    return (
        <button className="app-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;