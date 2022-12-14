function Square(props) {
    return (
        <button className={props.color + ' square'} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;
