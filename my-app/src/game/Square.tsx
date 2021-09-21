import React from 'react'

interface Props {
  value: number | string | null;
  onClick:any
}

export interface State {
  value: number | string | null;
}

function Square (props: any) {

  return (
      <button className="square" onClick={() => props.onClick()}>
         {props.value}
      </button>
    )
}

export default Square
