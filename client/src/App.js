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
import axios from "axios";
import  "./App.css";
import Profile from "./pages/Profile/Profile"

axios.defaults.baseURL = "http://localhost";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default function App() {
  return (
    <>
    <body className="body-app">
      <Router>
        <Switch>
          <Route exact path="/">
            {localStorage.getItem("auth_token") ? <Redirect to="/walk"/> : <Home />}
          </Route>
          <Route path="/walk">
          {localStorage.getItem("auth_token") ? <Walk /> : <Redirect to="/" />}
          </Route>
          <Route path="/profile">
          {localStorage.getItem("auth_token") ? <Profile />  : <Redirect to="/" />}
        </Route>
        </Switch>
      </Router>
      </body>
    </>
  );
}
