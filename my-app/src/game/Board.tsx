import React from 'react'
import Square from './Square'

export function calculateWinner(squares:any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function isDraw (squares:any) {
  return (squares.every((line:any) => {
      return line != null;
  }))
}

export interface State {
  squares: any;
  next: boolean;
}

class Board extends React.Component<any, State> {

  handleClick(i: any) {
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.next ? 'X' : '0'
    this.setState({
      squares: squares,
      next:!this.state.next
    })
  }

  renderSquare(i: any) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }
  render() {
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board
