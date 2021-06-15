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

// Komponen - Properties
function Biodata(props){
  return <span>umurnya {props.age}</span>
}

function Greeting(props){
  return <h1>Halo {props.name} - <Biodata age={props.age} /></h1>
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting name="Hamdan" age="25"/>
          <Greeting name="Abyadi" age="18"/>
        </header>
      </div>
    );
  }
}

export default App;
