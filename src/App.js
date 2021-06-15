import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           My name is Hamdan Abyadi Suwandi
//         </p>
//         <a
//           className="App-link"
//           href="https://instagram.com/hamdanasch"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           My Profile
//         </a>
//       </header>
//     </div>
//   );
// }

// event handler

class Toggle extends Component{
  constructor(props){
    super(props)

    this.state = {
      toggleStatus: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }));
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
      </button>
    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Toggle />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
