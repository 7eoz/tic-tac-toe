import { useState } from 'react';
import Board from '../Board'
import './index.css'
import { determineWinner } from '../../helper'

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
	const winner = determineWinner(history[stepNumber]);

	const handleClick = (i) => {
		const timeInHistory = history.slice(0, stepNumber + 1);
		const current = timeInHistory[stepNumber];
		const squares = [...current];
		if (winner || squares[i]) return;

		squares[i] = xIsNext ? 'X' : 'O';

		setHistory([...timeInHistory, squares]);
		setStepNumber(timeInHistory.length);
		setXIsNext(!xIsNext);
	};

	const jumpTo = (step) => {
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	};

	const renderMoves = () =>
		history.map((_step, move) => {
			const destination = move ? `Go to move #${move}` : `Go to start`;
			return (
				<li>
					<button onClick={() => jumpTo(move)}>{destination}</button>
				</li>
			);
		});

	return (
		<>
			<Board squares={history[stepNumber]} onClick={handleClick} />
			<div className="game">
				<p>
					{winner
						? 'Winner is ' + winner
						: 'Next Player: ' + (xIsNext ? 'X' : 'O')}
				</p>
				{renderMoves()}
			</div>
		</>
	);
};

export default Game;
