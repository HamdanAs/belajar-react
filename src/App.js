import React, {Component} from 'react';
import './App.css';

class App extends Component{

  render(){

    return (
      <div>
        <table>
          <tr>
            <Column />
          </tr>
        </table>
      </div>
    );
  }
}

class Column extends React.Component{
  render(){
    return (
      <React.Fragment>
        <td>Hamdan</td>
        <td>Abyadi</td>
      </React.Fragment>
    );
  }
}

export default App;
