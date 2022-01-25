import './components/Parallax/parallax.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
