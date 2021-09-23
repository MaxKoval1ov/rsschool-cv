import React, { Component } from 'react'
import Game from './game/Game'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import mProject from './my-project.png'

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
        <h5 style = {{width:"100%"}}>Links to projects:</h5>
          {/* <div className="img-container"><a href="https://rolling-scopes-school.github.io/maxkoval1ov-JSFE2021Q1/online-zoo/" className="link_to_project"></a></div> */}
          <a href="https://rolling-scopes-school.github.io/maxkoval1ov-JSFE2021Q1/online-zoo/" title = "test_project">
            <div className="dws">
              <div className="blocImg">
                <img src={mProject} alt="CSS эффект"/>
                <div className="blocText">
                    <div className="text">
                      <h2>Online-zoo <span>with using</span></h2>
                      <p>CSS, JS, HTML</p>
                    </div>
                </div>
              </div>
                    </div>
          </a>
      </section>
    )
  }
}
