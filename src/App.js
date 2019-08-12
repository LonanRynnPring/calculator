import React, { Component } from 'react';
import './App.css';
import { ResultComponent } from './ResultComponent';

class App extends Component {
  state = {
    result: "",
    keys: ['(', ')', 'CE', 'C','x^y','π','e','Rand', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/']
  }

  handleClick = button => {
    if(button === "="){
      this.handleCalculate()
    }

    else if(button === "C"){
      this.handleReset()
    }

    else if(button === "CE"){
      this.handleBackspace()
    }

    else if(button === "x^y"){
      this.setState({
        result: this.state.result + "**"
      })
    }

    else if(button === "π"){
      this.setState({
        result: this.state.result + "(Math.PI)"
      })
    }

    else if(button === "e"){
      this.setState({
        result: this.state.result + "(Math.E)"
      })
    }

    else if(button === "Rand"){
      this.setState({
        result: this.state.result + "(Math.floor(Math.random()*1000))"
      })
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  handleCalculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "" )
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  handleReset = () => {
    this.setState({
      result: ""
    })
  }

  handleBackspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="cell cell1"></div>
          <div className="cell cell2"></div>
          <div className="cell cell3"></div>
          <div className="cell cell4"></div>
          <div className="calculator-body cell cell5">
            
            <div className="button">
              <ResultComponent result={this.state.result}/>
              {this.state.keys.map((keys) =>{
                return(<button onClick={() => this.handleClick(keys)}>{keys}</button>)                                            
              })}
            </div>
          </div>
          <div className="cell cell6"></div>
          <div className="cell cell7"></div>
          <div className="cell cell8"></div>
          <div className="cell cell9"></div>
        </div>
      </div>
    );
  }
}

export default App;
