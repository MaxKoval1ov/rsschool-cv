import { any } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'
import { calculateWinner, isDraw } from './Board'
import './styles.scss'

class Game extends React.Component<any,any> {
  constructor(props: any) {
    super(props)
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      next: true,
      stepNumber: 0
    }
  }

  handleClick(i:any) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step:any) {
    this.setState({
      stepNumber: step,
      next: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const draw = isDraw(current.squares);
    const moves = history.map((step:any, move:any) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key = {move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else
    if(draw){
      status = 'Draw';
    }else
    {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className = "game-wrapper">
        <div className="game">
          <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i:any) => this.handleClick(i)}
          />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ul>{moves}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
