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

// State
class Timer extends Component{
  constructor(props){
    super(props)

    this.state = {
      time: props.start
    }
  }

  // lifecycle
  componentDidMount(){
    this.addInterval = setInterval(() => this.increase(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){
    // update state time setiap 1 detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }));
  }

  render(){
    return (
      <div>{this.state.time} detik</div>
    );
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="0"/>
        </header>
      </div>
    );
  }
}

export default App;
