import { useContext, useRef } from "react";
import "./login.css";
import  {AuthContext} from "../../Context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
  };
 

  return (
    <div class="signupFrm">
      <form action="" class="form">
        <h1 class="title">Sign in</h1>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Email</label>
        </div>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Password</label>
        </div>
  
        <input type="submit" class="submitBtn" value="Sign up" />
      </form>
    </div>
  );
}
