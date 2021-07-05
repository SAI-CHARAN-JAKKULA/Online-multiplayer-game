// import logo from './logo.svg';
import './App.css';
import Game from './Game';
import React from 'react';
import BoardWrapper from './Board.context';
import Login from './Login';
import {useContext} from 'react';
import { SignInContext } from './SignIn.context';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import CreateRoom from './CreateRoom';
import Lobby from './Lobby';
import JoinRoom from './JoinRoom';
// import ReactDOM from 'react-dom';
function App() {
  const details=useContext(SignInContext);
  const user=details.username;
  return (
    <div className="App">
     
      {!user?
      (<Login/>):
    ( <Router>
        <Switch>
          <Route path='/game'>
            <Game/>
          </Route>
        <Route path='/lobby/:roomid'>
             <Lobby/>
          </Route>
          <Route path='/joinroom'>
             <JoinRoom/>
          </Route>
            <Route path='/createroom'>
            <CreateRoom/>
          </Route>
          <Route path='/'>
             <Home/>
          </Route>
        </Switch>
     
      </Router> )}
    </div>
  );
}

export default App;
