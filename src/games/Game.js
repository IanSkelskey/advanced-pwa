function Game(props) {
    return (
        <div className="game">
            <div className="game-board">{props.board}</div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

export default Game;
