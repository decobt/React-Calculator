import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //set default value for result to 0
    this.state = {
      result : '0'
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
  render() {
    var rows = [];
    var values = [7,8,9,'+',4,5,6,'-',1,2,3,'/',0,'.','=','*']
    for(var i of values){
      rows.push(<div className="col-xs-3 padButton" key={i} onClick={this.buttonPress.bind(this, i)}><h1>{i}</h1></div>);
    }
    return (
      <div className="App">
          <div className="row display">
            <div className="col-xs-4 col-sm-2">
              <h1><button onClick={this.clearResult.bind(this)} className="btn btn-primary btn-lg btn-block">Clear</button></h1>
            </div>
            <div className="col-xs-8 col-sm-10 text-right">
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
