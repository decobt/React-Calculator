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
      if( ['-','+','/','*'].includes(i)){
        rows.push(<div className="padButton opButton" key={i} onClick={this.buttonPress.bind(this, i)}><span>{i}</span></div>);
      }else if( i == '='){
        rows.push(<div className="padButton eqButton" key={i} onClick={this.buttonPress.bind(this, i)}><span>{i}</span></div>);
      }else{
      rows.push(<div className="padButton" key={i} onClick={this.buttonPress.bind(this, i)}><span>{i}</span></div>);
      }
    }
    return (
      <div className="App">

        <div className="display">
          <div className="text-right">
            <h1>{this.state.result}</h1>
          </div>
        </div>

        <div className="pad">
          <div onClick={this.clearResult.bind(this)} className="padButton opButton"><span>CE</span></div>
          <div onClick={this.recallMemory.bind(this)} className="padButton opButton"><span>MR</span></div>
          <div onClick={this.storeMemory.bind(this)} className="padButton opButton"><span>MS</span></div>
          <div onClick={this.clearMemory.bind(this)}  className="padButton opButton"><span>MC</span></div>
        </div>
        
        <div className="pad text-center">
          {rows}
        </div>
      </div>
    );
  }
}

export default App;
