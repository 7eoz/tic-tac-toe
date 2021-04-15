import React, {useState} from 'react';
import './index.css';

function Board() {
    const [values, setValues] = useState(Array(9).fill(null))

	const handleClick = (i) => {
		const squares = values.slice()
		squares[i] = 'X'
		setValues(squares)
	}

    const renderSquare = (i) => {
		return ( 
		<Square 
		value={values[i]}
		onClick={() => handleClick(i)}/>
		)
	};

    const Square = (props) => {
        return (
        <button className='square' 
		onClick={() => props.onClick}>
            {props.value}
        </button>
        )
    }

	const status = 'Next player: X';

	return (
		<div>
			<div className='status'>{status}</div>
			<div className='board-row'>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className='board-row'>
				{renderSquare(4)}
				{renderSquare(3)}
				{renderSquare(5)}
			</div>
			<div className='board-row'>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

function Game() {
	return (
		<div className='game'>
			<div className='game-board'>
				<Board />
			</div>
			<div className='game-info'>
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
}

// ========================================

export default Game;
