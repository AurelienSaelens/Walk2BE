import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";


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
      <div class="signupFrm">
      <form action="" class="form">
        <h1 class="title">Sign up</h1>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Email</label>
        </div>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Username</label>
        </div>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Password</label>
        </div>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Confirm Password</label>
        </div>
  
        <input type="submit" class="submitBtn" value="Sign up" />
      </form>
    </div>
    );
  }