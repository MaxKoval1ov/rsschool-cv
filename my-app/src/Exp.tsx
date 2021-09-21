import React, { Component } from 'react'
import Game from './game/Game'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default class Exp extends Component {

  codeString =`export const getCars = async (page: number, limit = 7): Promise<any> => {
    const res = await fetch({garage}?_page={page}&_limit={limit});

    return {
      items: await res.json(),
      count: res.headers.get('X-Total-Count'),
    };
  };`

  render() {
    return (
      <section className = "Experience" id ='Experience'>
        <h3>Expirience:</h3>
        <h4>G<span className="primary">a</span>m<span className="primary">e</span> e<span className="primary">x</span>a<span className="primary">m</span>p<span className="primary">l</span>e:</h4>
        <Game/>
        <h4>Code example:</h4>
        <SyntaxHighlighter className = "highLight" language="javascript" style={darcula}>
         {this.codeString}
        </SyntaxHighlighter>
      </section>
    )
  }
}
