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

function Clicker(){
  function handleClick(e){
    alert('berhasil click')
    e.preventDefault();
  }

  return (
    <a href="#" onClick={handleClick}>Klik disini!</a>
  )
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Clicker />
      </div>
    );
  }
}

export default App;
