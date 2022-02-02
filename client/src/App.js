import './components/Parallax/parallax.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Walk from './pages/Walk/Walk';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import axios from 'axios';
import app from './app.css'

axios.defaults.baseURL = "http://fundait.test/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;


function App() {
  
  return (

    <>
    

    <Router>
      <Switch>
        <Route exact path="/">
       <Home /> 
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
        <Register />
        </Route>
        <Route exact path="/walk">
        <Walk />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
