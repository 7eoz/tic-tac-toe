import React, {useState} from 'react';
import './index.css';

<<<<<<< HEAD
function Board() {
    const [clickedSquares, setClickedSquares] = useState(Array(9).fill(null))
=======
<<<<<<< HEAD
function Game() {
	const [squares, setSquares] = useState(Array(9).fill(null))
	const [history, setHistory] = useState(useState(Array(9).fill(null)))
>>>>>>> 09289043608d0f11068890f7d1f93cff90b9bff1
	const [xIsNext, setXIsNext] = useState(true)
	const [moves, setMoves] = useState(0)

	const determineWinner = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		  ]
		for(let i=0; i < lines.length; i++){
			let [a, b, c] = lines[i]
			if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
				return squares[a]
			}
		}
		return null
	}

	const handleClick = (i) => {
	//Makes a copy of the board in order to maintain immutability
	const squares = clickedSquares.slice()
	//Checks if the game is over or if the square is already filled
	if( winner || squares[i] ) return
	squares[i] = xIsNext ? 'X' : 'O'
	setMoves(prevMoves => prevMoves + 1)
	setClickedSquares(squares)
	setXIsNext(!xIsNext)
	}

    const renderSquare = (i) => {
		return ( 
		<Square 
		value={clickedSquares[i]}
		onClick={() => handleClick(i)}/>
		)
	};

    const Square = (props) => {
        return (
        <button className='square' 
		onClick={props.onClick}>
            {props.value}
        </button>
        )
    }

	let winner =  determineWinner(clickedSquares)
	let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`
	if(!winner && moves === 9) status = 'Draw'

<<<<<<< HEAD
=======


	function Board(props) {

		const handleClick = (i) => {
			//Makes a copy of the board in order to maintain immutability
			const square = squares.slice()
			setHistory(...history, squares)
			//Checks if the game is over or if the square is already filled
			if( winner || square[i] ) return
	
			square[i] = xIsNext ? 'X' : 'O'
			setMoves(prevMoves => prevMoves + 1)
			setSquares(square)
			setXIsNext(!xIsNext)
		}

		const renderSquare = (i) => {
			return ( 
			<Square 
			value={props.squares[i]}
			onClick={() => props.handleClick(i)}/>
			)
		};

		const Square = (props) => {
			return (
			<button className='square' 
			onClick={props.onClick}>
				{props.value}
			</button>
			)
		}



		return (
			<div>
				<div className='status'>{status}</div>
				<div className='board-row'>
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div className='board-row'>
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className='board-row'>
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
=======
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

>>>>>>> 09289043608d0f11068890f7d1f93cff90b9bff1
	return (
		<div>
			<div className='status'>{status}</div>
			<div className='board-row'>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
<<<<<<< HEAD
=======
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
>>>>>>> parent of aff3c60 (Adding moves control and winner determination)
>>>>>>> 09289043608d0f11068890f7d1f93cff90b9bff1
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

export default Game;