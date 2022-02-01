import './components/Parallax/parallax.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from './Context/AuthContext';
import Walk from './pages/Walk/Walk';
import Login from './pages/Login/Login';



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
       <Home /> 
        </Route>
        <Route exact path="/walk">
        <Walk />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
