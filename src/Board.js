import Square from "./games/Square";

function Board(props) {
    const tileCount = props.size*props.size;

    function renderBoard() {
        let board = [];
        for(let i = 0; i < tileCount; i++) {
            board[i] = <Square value={props.squares[i]} color={props.color} onClick={() => props.handleClick(i)} />;
        }
        return board;
    }

    const style = {
        'display': 'grid',
        'grid-template-columns': 'repeat(' + props.size + ', minmax(0, 1fr))'
    }

    return (
        <div style={style}>{renderBoard()}</div>
    );
}

export default Board;
