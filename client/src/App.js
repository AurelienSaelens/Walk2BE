import "./components/Parallax/parallax.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Walk from "./pages/Walk/Walk";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import axios from "axios";
import app from "./app.css";

axios.defaults.baseURL = "http://fundait.test/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/walk" />
            ) : (
              <Home />
            )}
          </Route>
          <Route exact path="/login">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/walk" />
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path="/register">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/walk" />
            ) : (
              <Register />
            )}
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
