import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    var rows = [];
    var values = [1,2,3,'-','+',4,5,6,'/','*',7,8,9,'0','=']
    for(var i of values){
      if(Number.isInteger(i)){
        rows.push(<div className="col-sm-2 numButton"><h1>{i}</h1></div>);
      }else{
        rows.push(<div className="col-sm-3 optButton"><h1>{i}</h1></div>);
      }
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 display"><h1>0</h1></div>
          {rows}
        </div>
      </div>
    );
  }
}

export default App;
