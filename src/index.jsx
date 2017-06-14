import React, { Component } from 'react';
import { render } from 'react-dom'
import ReactMarkdown from 'react-markdown';
import 'normalize.css';
import './style.css';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      rawText: ''
    };
  }

  handleTextareaChange(e) {
    this.setState({ rawText: e.target.value });
  }

  handleClear() {
    this.setState({ rawText: '' })
  }

  render() {
    return (
      <div className="root">
        <h1>Markdown previewer</h1>

        <div className="main-area">
          <div className="main-area__section">
            <h2>Input</h2>
            <textarea className="input" onChange={::this.handleTextareaChange} value={this.state.rawText} />
            <button onClick={::this.handleClear}>Clear</button>
          </div>

          <div className="main-area__section">
            <h2>Output</h2>
            <ReactMarkdown source={this.state.rawText} />
          </div>
        </div>
      </div>
    )
  }
}

render(<Main />, document.getElementById('root'));