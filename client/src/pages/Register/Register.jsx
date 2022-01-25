import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom"; 
import Walk from "../Walk/Walk";


export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();
  
    const handleClick = async (e) => {
      e.preventDefault();
      if (passwordAgain.current.value !== password.current.value) {
        passwordAgain.current.setCustomValidity("Passwords don't match!");
      } else {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        try {
          await //axios.post("/auth/register", user);
          history.push("/login");
        } catch (err) {
          console.log(err);
        }
      }
    };
  
    return (
      <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
          </div>
          <div className="registerRight">
            <form className="registerBox" onSubmit={handleClick}>
              <input
                placeholder="Username"
                required
                ref={username}
                className="registerInput"
              />
              <input
                placeholder="Email"
                required
                ref={email}
                className="registerInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                className="registerInput"
                type="password"
                minLength="6"
              />
              <button className="registerButton" type="submit">
                Sign Up
              </button>
              <Link className="linkRegister" to="/Walk.jsx">
                <button to="/Login" className="loginRegisterButton">Log into Account</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }