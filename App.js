import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Prices from './Components/Prices';
import Login from './Components/Login';

function App() {
  const [userName,setUserName]=useState('');

  return (
    <div>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
        
      <Router>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/prices">
            <Prices/>
          </Route>
          <Route path="/login">
            <Login userName={userName}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/prices">Prices</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default App;
