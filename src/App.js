import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './App.css';

function Home(){
  return <h2>Ini adalah halaman Home</h2>
}

function User(){
  return (
    <div>
      <h2>Ini adalah halaman User</h2>
      <ul>
        <li><Link to="/user/hamdan">Hamdan</Link></li>
        <li><Link to="/user/abyadi">Abyadi</Link></li>
      </ul>
    </div>
  );
}

function DetailUser({ match }){
  return <h2>Ini adalah halaman {match.params.name}</h2>
}

function NotFound(){
  return <h2>Halaman tidak ditemukan</h2>
}

class App extends Component{

  render(){

    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">User</Link></li>
            </ul>
          </nav>

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/users" exact component={User} />
              <Route path="/user/:name" exact component={DetailUser} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
