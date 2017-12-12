import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //set default value for result to 0
    this.state = {
      result : '0',
      memory: ''
    }
  }
  buttonPress(i){
    //check if equal button is pressed
    if( i === '='){
      //if yes, evaluate the expression and update state
      this.setState({
        // eslint-disable-next-line
        result: eval(this.state.result).toString()
      });
    }else{
      //else if not, check if there is only 0 displayed
      if(Number.isInteger(i) && this.state.result === '0'){
        //if yes, update the state to be a digit and not start with 0
        this.setState({
          result: i.toString()
        });
      }else{
        //else update the expression with operator sign
        this.setState({
          result: this.state.result + i
        });
      }
    }
  }
  clearResult(){
    //clear the result by setting it to 0
    this.setState({
      result: '0'
    });
  }
  clearMemory(){
    //clear the memory by setting it to empty
    this.setState({
      memory: ''
    });
    //console.log('clear: '+this.state.memory);
  }
  storeMemory(){
    //store to memory the result of the expression
    this.setState({
      memory: eval(this.state.result).toString()
    });
    //console.log('memory-store: '+eval(this.state.result).toString());
  }
  recallMemory(){
    //add from memory the value stored to the one displayed
    this.setState({
      result: this.state.result.toString() + this.state.memory.toString()
    });
    //console.log('memory-recall: '+this.state.result.toString() + this.state.memory.toString());
  }
  render() {
    var rows = [];
    var values = [7,8,9,'+',4,5,6,'-',1,2,3,'/',0,'.','=','*']
    for(var i of values){
      rows.push(<div className="col-xs-3 padButton" key={i} onClick={this.buttonPress.bind(this, i)}><h1>{i}</h1></div>);
    }
    return (
      <div className="App">
          <div className="row display">
            <div className="col-xs-6 col-sm-5 col-md-4">
              <h1>
              <div className="btn-group" role="group" aria-label="...">
                <button onClick={this.clearResult.bind(this)} className="btn btn-lg btn-primary">CE</button>
                <button onClick={this.recallMemory.bind(this)} type="button" className="btn btn-lg btn-primary">MR</button>
                <button onClick={this.storeMemory.bind(this)} type="button" className="btn btn-lg btn-primary">MS</button>
                <button onClick={this.clearMemory.bind(this)}  type="button" className="btn btn-lg btn-primary">MC</button>
              </div>

              </h1>
            </div>
            <div className="col-xs-6 col-sm-7 col-md-8 text-right">
              <h1>{this.state.result}</h1>
            </div>
        </div>
        <div className="row">
          {rows}
        </div>
      </div>
    );
  }
}

export default App;
